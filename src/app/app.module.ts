import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './Components/baner/baner.component';
import { PersonalInformationComponent } from './Components/personal-information/personal-information.component';
import { EducationComponent } from './Components/education/education.component';
import { WorkExperienceComponent } from './Components/work-experience/work-experience.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
//import { ResponsikeDirective } from './responsike.directive';
import { ResponsiveDirectiveDirective } from './Directive/responsive-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    PersonalInformationComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactsComponent,
    ResponsiveDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
