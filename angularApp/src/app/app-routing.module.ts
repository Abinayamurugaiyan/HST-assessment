import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ResponsiveUiComponent } from './responsive-ui/responsive-ui.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent }, 
  { path: 'responsive-ui', component: ResponsiveUiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
