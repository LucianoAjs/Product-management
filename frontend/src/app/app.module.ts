import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.modules';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteProductComponent } from './product-manager/delete-product/delete-product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { UpdateProductComponent } from './product-manager/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductManagerComponent,
    DeleteProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CommonModule,
    SharedModule,
  ],
  exports: [SharedModule],
  entryComponents: [
    ProductManagerComponent,
    DeleteProductComponent,
    UpdateProductComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
