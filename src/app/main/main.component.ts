import { CommonModule , isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID, inject, input } from '@angular/core';
import Aos from 'aos';
import { DownloadService } from '../download.service';
import { Gamocdileba } from '../gamocdileba';
import { GamocdilebaService } from '../gamocdileba.service';
import { Ganatleba } from '../ganatleba';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  @Input() gamocdileba!:Gamocdileba;
  @Input() ganatleba!:Ganatleba;

  gamocdilebaList:Gamocdileba[]=[];
  ganatlebaList:Ganatleba[]=[];

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
