import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DestinationpageComponent } from './pages/destinationpage/destinationpage.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SocialsComponent } from './pages/socials/socials.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'destinations',component:DestinationsComponent},
  {path:'destinations/:id',component:DestinationpageComponent},
  {path:'about',component:AboutComponent},
  {path:'socials',component:SocialsComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
