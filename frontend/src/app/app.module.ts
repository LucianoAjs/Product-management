import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.modules';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';

@NgModule({
  declarations: [AppComponent, ProductManagerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CommonModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
