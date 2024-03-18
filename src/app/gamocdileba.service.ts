import { Injectable } from '@angular/core';
import { Gamocdileba } from './gamocdileba';
import { Ganatleba } from './ganatleba';

@Injectable({
  providedIn: 'root'
})
export class GamocdilebaService {
  protected gamocdilebaList:Gamocdileba[]=[
    {
      "id":1,
      "position":"Freelancer Web Developer",
      "info":"",
      "date":"2023.07.05 / present",
      "image":"assets/Experience/freelancer.png",
      "alt":"Freelancer",
    },
    {
      "id":2,
      "position":"Google Solution Challange Hackathon",
      "info":"#3 Place",
      "date":"2023.12.17",
      "image":"assets/Experience/gsch.jpeg",
      "alt":"Google Solution Challange Hackathon",
    },
    {
      "id":3,
      "position":"IT Specialist",
      "info":"MyOffice | Tbilisi, Georgia",
      "date":"2023.06/2023.11",
      "image":"assets/Experience/specialist.jpeg",
      "alt":"IT Specialist",
    },
    {
      "id":4,
      "position":"IT Content Manager",
      "info":"IceCat | Kyiv, Ukraine",
      "date":"2022/2023",
      "image":"assets/Experience/cmanagement.jpeg",
      "alt":"IT Content Manager",
    },
    {
      "id":5,
      "position":"Deputy Director",
      "info":"Ilia 2008 | Tbilisi, Georgia",
      "date":"2019/2022",
      "image":"assets/Experience/warehouse.png",
      "alt":"Deputy Director",
    },
  ]
  protected ganatlebaList:Ganatleba[]=[
    {
      "id":1,
      "name":"University Of Georgia",
      "marjor":"Information Technologies",
      "date":"2019-Present",
      "image":"assets/Education/ug.png",
      "alt":"University Of Georgia",
    },
    {
      "id":2,
      "name":"FreeCodeCamp",
      "marjor":"Responsive Web Design",
      "date":"2023.08.14",
      "image":"assets/Education/FCC.svg",
      "alt":"FreeCodeCamp",
    },
    {
      "id":3,
      "name":"Microsoft Learn",
      "marjor":"Azure, C#",
      "date":"2023.07-Present",
      "image":"assets/Education/microsoft.png",
      "alt":"Microsoft Learn",
    },
  ]
  //ganatleba
  getAllGanatleba():Ganatleba[]{
    return this.ganatlebaList;
  }
  getGanatlebaId(id:number):Ganatleba|undefined{
    return this.ganatlebaList.find(sitem=>sitem.id===id);
  }
//gamocdileba
  getAllGamocdileba():Gamocdileba[]{
    return this.gamocdilebaList;
  }
  getGamocdilebaId(id:number):Gamocdileba|undefined{
    return this.gamocdilebaList.find(sitem=>sitem.id===id);
  }
  constructor() { }
}
