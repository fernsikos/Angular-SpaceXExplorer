import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RocketDataComponent } from './rocket-data/rocket-data.component';

const routes: Routes = [
{path: '', component: MainComponent},
{path:'rocket-data', component: RocketDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
