import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { UploadComponent } from '@app/modules/upload/upload.component';

const routes: Routes = [
  { path: 'upload', component: UploadComponent, data: { title: extract('Upload') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UploadRoutingModule { }