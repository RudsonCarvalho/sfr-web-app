import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule} from '@app/core/core.module';
import { environment } from '@env/environment';

import { UploadModule } from '@app/modules/upload/upload.module';
import { SharedModule } from '@app/shared/share.module';
import { HomeModule } from '@app/modules/home/home.module';
import { AboutModule } from '@app/modules/about/about.module';
import { LoginModule } from '@app/modules/login/login.module';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({  
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),    
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    LoginModule,
    UploadModule,
    AppRoutingModule
   
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


