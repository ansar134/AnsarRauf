import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { VerticalTimelineModule } from 'angular-vertical-timeline';

import { AppComponent } from './app.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';

const appRoutes: Routes=[
  { path: 'projects', component: ProjectsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'expertise', component: ExpertiseComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    SkillsComponent,
    ExpertiseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    VerticalTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
