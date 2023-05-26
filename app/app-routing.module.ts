import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from  './main/main.component';
import { RecettesComponent } from './recettes/recettes.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'recettes', component: RecettesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
