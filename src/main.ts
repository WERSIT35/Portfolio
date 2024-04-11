import { ApplicationConfig, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));