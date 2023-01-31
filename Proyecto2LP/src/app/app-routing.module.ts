import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstandComponent } from './addstand/addstand.component';
import { EdithdeletestandComponent } from './edithdeletestand/edithdeletestand.component';
import { EventosComponent } from './eventos/eventos.component';
const routes: Routes = [
{path:"stand",component:EventosComponent},
{path:"addstand",component:AddstandComponent},
{path:"edithdelete",component:EdithdeletestandComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
