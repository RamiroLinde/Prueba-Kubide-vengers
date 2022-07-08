import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo:'/home'},
  { path:"home", component: HomeComponent},
  { path:"detail/:id", component: DetailsComponent},
  { path: "team", component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
