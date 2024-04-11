import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Aos from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  ngOnInit() {
    Aos.init();
    Aos.refresh();
  }

  // constructor(private http: HttpClient) { }

  // submitForm(form: NgForm) {
  //   const formData = {
  //     email: form.value.email,
  //     message: form.value.message
  //   };
  //   this.http.post('/api/send-email', formData)
  //     .subscribe(
  //       response => {
  //         console.log('Email sent successfully', response);
  //         form.reset();
  //       },
  //       error => {
  //         console.error('Error sending email', error);
  //       }
  //     );
  // }
}
