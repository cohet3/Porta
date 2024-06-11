import { RouterModule, Routes } from '@angular/router';
import { ProyectsComponent } from './proyects/proyects.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'proyects', component: ProyectsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: HomeComponent },
    { path: 'home', component: HomeComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }