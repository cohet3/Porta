import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent implements OnInit, OnDestroy{
  certificates: string[] = [
    'https://udemy-certificate.s3.amazonaws.com/image/UC-85c8041c-27ab-4be5-ab9c-c1837651dfa9.jpg?v=1675685699000',
    'https://udemy-certificate.s3.amazonaws.com/image/UC-19b89047-baf2-4b9c-adee-e2ec7d1f0d18.jpg?v=1645805792000',
   
    // Agrega aquí más rutas a tus certificados
  ];

  currentSlideIndex = 0;
  nextSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex + 1) % this.certificates.length;
  }

  
  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.certificates.length) % this.certificates.length;
  }
  slideInterval: any;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }


  
}
