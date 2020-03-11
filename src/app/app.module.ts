import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SchoolhoursComponent } from './schoolhours/schoolhours.component';
import { SchooluniformsComponent } from './schooluniforms/schooluniforms.component';
import { SchoolrulesComponent } from './schoolrules/schoolrules.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutparadiseComponent } from './aboutparadise/aboutparadise.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { DirectorsMessageComponent } from './directors-message/directors-message.component';
import { PrincipalMessageComponent } from './principal-message/principal-message.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SchoolhoursComponent,
    SchooluniformsComponent,
    SchoolrulesComponent,
    ContactusComponent,
    AboutparadiseComponent,
    VisionMissionComponent,
    DirectorsMessageComponent,
    PrincipalMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
