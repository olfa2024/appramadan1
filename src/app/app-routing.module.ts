import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './components/homeSections/about/about.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { RecetteComponent } from './recette/recette.component';

const routes: Routes = [
  {
    path: "",
    title: "SuiviRamadan | Home",
    component: HomeComponent
  },
  {
    path: "cart",
    title: "SuiviRamadan | Shopping Cart",
    component: CartComponent
  },
  {
    path: "**",
    title: "SuiviRamadan | 404",
    component: NotFoundComponent
  },
  {
    path: "**",
    title: "SuiviRamadan | About",
    component: AboutComponent
  },
  {
    path: "**",
    title: "SuiviRamadan | Calendrier",
    component: CalendrierComponent 
  },
  {
    path: "**",
    title: "SuiviRamadan | Recette",
    component: RecetteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
