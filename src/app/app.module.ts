import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { MyOwnCustomMaterialModule } from './material.module';

const appRoutes: Routes = [
  // { path: 'skills', component: SkillsComponent, data: { section: 'skills' } },
  { path: 'projects', component: ProjectsComponent, data: { section: 'projects' } },
  // { path: 'volunteering', component: VolunteeringComponent, data: { section: 'volunteering' } },
  { path: 'work', component: WorkExperienceComponent, data: { section: 'work' } },
  { path: '**', redirectTo: '/work', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    WorkExperienceComponent,
    VolunteeringComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    MyOwnCustomMaterialModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 