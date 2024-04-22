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

      about:"Developed and designed an architectural website for \"Akhali Sakhli\", showcasing projects, services, and company information. Implemented user-friendly navigation and responsive design for optimal viewing across devices. Incorporated visually engaging graphics and intuitive UI/UX elements to enhance user experience.",
      numOfPage:26,
      duration:"1 month",

      img:[
        "assets/projects/newHouse/landing.png",
        "assets/projects/newHouse/pic1.png",
        "assets/projects/newHouse/pic2.png",
        "assets/projects/newHouse/pic3.png",  
      ],

      link:"",

      iflink:true,
    },
    {
      projName:"Cyber Blog",
      date:"1/1/2023",

      about:"Built a sleek cyber blog website for cybersecurity enthusiasts. Features latest trends, news, and interactive discussions. Responsive design ensures seamless browsing on all devices. Engaging content and visuals enhance user experience.",
      numOfPage:12,
      duration:"1 month",

      img:[
        "assets/projects/cyberBlog/landing.png",
        "assets/projects/cyberBlog/pic1.png",
        "assets/projects/cyberBlog/pic2.png",
        "assets/projects/cyberBlog/pic3.png",  
      ],

      link:"https://cyberblogug.netlify.app/",

      iflink:true,
    },
    {
      projName:"Achuke Gift Store",
      date:"4/2/2023",

      about:"Designed and developed Achuke Gift Store's online presence, featuring shop, and company details. Built with user-friendly navigation and responsive design for seamless viewing across devices. Incorporated engaging graphics and intuitive UI elements for an enhanced user experience.",
      numOfPage:5,
      duration:"3 Day",

      img:[
        "assets/projects/achuke/landing.png",
        "assets/projects/achuke/pic1.png",
        "assets/projects/achuke/pic2.png",
        "assets/projects/achuke/pic3.png",  
      ],

      link:"http://achukegiftstore.netlify.app/",

      iflink:true,
    },
  ]


  getAllprojects():Projects[]{
    return this.projectsList;
  }
  constructor() { }
}
