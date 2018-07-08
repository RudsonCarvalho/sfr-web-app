import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/share.module';
import { HomeRoutingModule } from '@app/modules/home/home-routing.module';
import { HomeComponent } from '@app/modules/home/home.component';
import { QuoteService } from '@app/core/services/quote.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }