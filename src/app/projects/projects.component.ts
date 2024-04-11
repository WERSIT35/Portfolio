import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { CommonModule } from '@angular/common';
import Aos from 'aos';
import { Projects } from '../projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  @Input() projectList!:Projects;

  projects:Projects[]=[]

  constructor(
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
  
  
}
