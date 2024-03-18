import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  downloadCV(): void {
    const filePath = 'assets/OTAR DAVITASHVILI.pdf'; // Adjust the path based on your project structure
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'Otar Davitashvili Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
