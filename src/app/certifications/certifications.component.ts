import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ganatleba } from '../ganatleba';
import { GamocdilebaService } from '../gamocdileba.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  certificateImage: boolean = false;

  route:ActivatedRoute=inject(ActivatedRoute);
  certifyID=0;

  certifService=inject(GamocdilebaService);

  certify:Ganatleba | undefined;

  constructor(){
    const certifyID=Number(this.route.snapshot.params['id']);
    this.certify=this.certifService.getGanatlebaId(certifyID);
  }

}
