import { Injectable } from '@angular/core';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsList:Projects[]=[
    {
      projName:"Akhali Sakhli",
      date:"4/5/2024",

      about:"Developed and designed an architectural website for [Company Name], showcasing projects, services, and company information. Implemented user-friendly navigation and responsive design for optimal viewing across devices. Incorporated visually engaging graphics and intuitive UI/UX elements to enhance user experience.",
      numOfPage:26,
      duration:"1 month",

      img:[
        "assets/projects/newHouse/home.png",
        "assets/projects/newHouse/about.png",
        "assets/projects/newHouse/interior.png",
        "assets/projects/newHouse/projjs.png",
      ],

      link:"#",
    },
  ]


  getAllprojects():Projects[]{
    return this.projectsList;
  }
  constructor() { }
}
