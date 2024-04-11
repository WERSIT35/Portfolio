import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Aos from 'aos';
import { Projects } from '../projects';
import { DownloadService } from '../download.service';
import { GamocdilebaService } from '../gamocdileba.service';
import { LoaderComponent } from "../loader/loader.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [CommonModule, LoaderComponent]
})
export class ProjectsComponent implements OnInit{
  @Input() projectList!:Projects;

  projects:Projects[]=[]

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private downloadService: DownloadService,
    private gamocdilebaService: GamocdilebaService,
    private projectService:ProjectsService,
  ){}
  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.projects=this.projectService.getAllprojects();
  }

  isFullscreen = false;
  fullscreenImageSrc: string | null = null;


  toggleFullscreen(imageUrl: string | null): void {
    this.isFullscreen = !!imageUrl;
    this.fullscreenImageSrc = imageUrl;
  }

  isLoading: boolean = true;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isLoading = false;
        Aos.init();
      }, 2000); // Adjust the timeout as needed
    } else {
      this.isLoading = false; // Set to false in non-browser environments
    }
  }
  
  
}
