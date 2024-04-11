import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LoaderComponent } from "./loader/loader.component";
import { DownloadService } from './download.service';
import { GamocdilebaService } from './gamocdileba.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Aos from 'aos';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent, RouterLink, LoaderComponent,CommonModule]
})
export class AppComponent implements OnInit, AfterViewInit{
  ngOnInit(): void {
  }
  title = 'portfolio';

  isLoading: boolean = true;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private downloadService: DownloadService,
    private gamocdilebaService: GamocdilebaService
  ) {}

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
