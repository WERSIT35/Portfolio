import { CommonModule , isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnInit, PLATFORM_ID, inject, input } from '@angular/core';
import Aos from 'aos';
import { DownloadService } from '../download.service';
import { Gamocdileba } from '../gamocdileba';
import { GamocdilebaService } from '../gamocdileba.service';
import { Ganatleba } from '../ganatleba';
import { RouterLink, RouterModule } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [CommonModule, RouterLink, RouterModule, LoaderComponent]
})
export class MainComponent implements OnInit{
  @Input() gamocdileba!:Gamocdileba;
  @Input() ganatleba!:Ganatleba;

  gamocdilebaList:Gamocdileba[]=[];
  ganatlebaList:Ganatleba[]=[];

  certificateImage: boolean = false;


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private downloadService: DownloadService,
    private gamocdilebaService: GamocdilebaService
  ) {}

  download(): void {
    this.downloadService.downloadCV();
  }
  ngOnInit() {
    this.gamocdilebaList=this.gamocdilebaService.getAllGamocdileba();
    this.ganatlebaList=this.gamocdilebaService.getAllGanatleba();
    if (isPlatformBrowser(this.platformId)) {
      Aos.init();
    }
  }

  
}
