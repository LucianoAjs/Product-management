import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
})
export class DeleteProductComponent {
  public entityName: string | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) data: { entityName: string }) {
    this.entityName = data.entityName;
  }
}
