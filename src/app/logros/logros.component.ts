import { Component } from '@angular/core';
import { CertificateComponent } from '../certificate/certificate.component';



@Component({
  selector: 'app-logros',
  standalone: true,
  imports: [CertificateComponent],
  templateUrl: './logros.component.html',
  styleUrl: './logros.component.css'
})
export class LogrosComponent {

}
