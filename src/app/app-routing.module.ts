import { ScheduleComponent } from './views/schedule/schedule/schedule.component';
import { CommunitiesComponent } from './views/communities/communities/communities.component';
import { SpeakersComponent } from './views/speakers/speakers/speakers.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'speakers', component: SpeakersComponent
  },
  {
    path: 'communities', component: CommunitiesComponent
  },
  {
    path: 'schedule', component: ScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
