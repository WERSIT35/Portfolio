import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    {
        path:'',
        component:MainComponent,
        title:'Home Page'
    },
    {
        path:'home',
        component:MainComponent,
        title:'Home Page'
    },
    {
        path:'projects',
        component:ProjectsComponent,
        title:'Home Page'
    },
    {
        path:'contact',
        component:ContactComponent,
        title:'Home Page'
    },
    {
        path:'blog',
        component:BlogComponent,
        title:'Home Page'
    },
    {
        path:'about',
        component:AboutComponent,
        title:'Home Page'
    },
    {
        path:'certify/:id',
        component:CertificationsComponent,
        title:'Details Page'
    },
    {
        path:'**',
        component:ErrorPageComponent,
        title:'ERROR 404'
    }
];
