import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from  './home/home.component';
import { BeersComponent } from  './beers/beers.component';
import { BreweriesComponent } from  './breweries/breweries.component';
import { EventsComponent } from  './events/events.component';
import { ContactComponent } from  './contact/contact.component';

const  routes:  Routes  = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
  path:  'home',
  component:  HomeComponent
  },
  {
  path:  'beers',
  component:  BeersComponent
  },
  {
  path:  'breweries',
  component:  BreweriesComponent
  },
  {
  path:  'events',
  component:  EventsComponent
  },
  {
  path:  'contact',
  component:  ContactComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
