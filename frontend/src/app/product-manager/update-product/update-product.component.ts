import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICreateProductRequest } from '@core/models/create-product-request.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  public data: { title: string; product: ICreateProductRequest };
  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private dialogRef: MatDialogRef<UpdateProductComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    data: { title: string; product: ICreateProductRequest },
  ) {
    this.data = data;
  }

  public ngOnInit(): void {
    this.setFormProduct();
  }

  public setFormProduct(): void {
    const { description, name, price, category, purchaseDate } =
      this.data.product;

    this.form = this.formBuilder.group({
      name: new FormControl(name || '', [Validators.required]),
      description: new FormControl(description || '', [Validators.required]),
      price: new FormControl(price, [Validators.required]),
      purchaseDate: formatDate(purchaseDate || new Date(), 'yyyy-MM-dd', 'en'),
      category: new FormGroup({
        name: new FormControl(category?.name || ''),
      }),
    });
  }

  public save() {
    this.form.valid && this.dialogRef.close(this.form?.value);
  }
}
