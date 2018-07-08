import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { AboutComponent } from '@app/modules/about/about.component';
import { CoreModule } from '@app/core/core.module';

const routes: Routes = [
  Route.withShell([
    { path: 'about', component: AboutComponent, data: { title: extract('About') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }