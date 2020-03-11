import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolhoursComponent } from './schoolhours/schoolhours.component';
import { SchooluniformsComponent } from './schooluniforms/schooluniforms.component';
import { SchoolrulesComponent } from './schoolrules/schoolrules.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutparadiseComponent } from './aboutparadise/aboutparadise.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { DirectorsMessageComponent } from './directors-message/directors-message.component';
import { PrincipalMessageComponent } from './principal-message/principal-message.component';
const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
   path:'schoolhours',component:SchoolhoursComponent
  },
  {
    path:'schooluniforms',component:SchooluniformsComponent
  },
  {
    path:'schoolrules',component:SchoolrulesComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'aboutparadise',component:AboutparadiseComponent
  },
  {
    path:'vision-mission',component:VisionMissionComponent
  },
  {
    path:'director-message',component:DirectorsMessageComponent
  },
  {
    path:'principal-message',component:PrincipalMessageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
