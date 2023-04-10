import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ICreateProductRequest } from '@core/models/create-product-request.model';
import { IProductResponse } from '@core/models/product-response.model';
import { IUpdateProductRequest } from '@core/models/update-product-request.model';
import { NotificationService } from '@core/services/notification.service';
import { currency } from '@shared/utils/currency.utils';
import { convertDate } from '@shared/utils/date.utils';
import { debounce } from '@shared/utils/debounce.utils';
import { ProductManagerService } from 'app/product-manager/product-manager.service';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss'],
  providers: [ProductManagerService],
})
export class ProductManagerComponent {
  constructor(
    private readonly productManagerService: ProductManagerService,
    private readonly formBuilder: FormBuilder,
    private dialog: MatDialog,
    private notification: NotificationService,
  ) {}

  public searchForm = this.formBuilder.group({
    category: new FormControl(''),
  });

  public list_items: Array<IProductResponse> = [];

  public formatCurrency = currency;
  public covertDateToPtBr = convertDate;

  public ngOnInit(): void {
    this.getAllProducts();

    this.searchForm.valueChanges.subscribe(() => {
      debounce(this.getAllProducts.bind(this), 1000, 'getProductData');
    });
  }

  private getAllProducts() {
    const query = this.searchForm.get('category')?.value?.trim();

    this.productManagerService
      .getAllProducts(query)
      .subscribe((products: IProductResponse[]) => {
        this.list_items = products;
      });
  }

  public showConfirmDeleteProduct(product: IProductResponse) {
    this.dialog.closeAll();

    this.dialog
      .open(DeleteProductComponent, {
        data: { entityName: product.name },
        width: '600px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (!result) {
          return this.notification.showWarning('Action aborted by user');
        }
        this.deleteProduct(product.id);
      });
  }

  public showCreateProductDialog() {
    this.dialog.closeAll();

    const dialogRef = this.dialog.open(UpdateProductComponent, {
      data: { title: 'Create a new product', product: {} },
      width: '400px',
      hasBackdrop: true,
    });
    dialogRef.backdropClick().subscribe(() => {
      this.dialog.closeAll();
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return this.notification.showWarning('Action aborted by user');
      }
      this.createProduct(result);
    });
  }

  public showUpdateProductDialog(product: IUpdateProductRequest) {
    this.dialog.closeAll();

    const dialogRef = this.dialog.open(UpdateProductComponent, {
      data: { title: `Update product: ${product.name}`, product },
      width: '400px',
      hasBackdrop: true,
    });

    dialogRef.backdropClick().subscribe(() => {
      this.dialog.closeAll();
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return this.notification.showWarning('Action aborted by user');
      }

      const productResult = { ...result, id: product.id };
      this.updateProduct(productResult);
    });
  }

  private updateProduct(product: IUpdateProductRequest) {
    console.log(product);
    this.productManagerService.updateProduct(product).subscribe(() => {
      this.notification.showSuccess('Product updated sucessfully');
      this.getAllProducts();
    });
  }

  private createProduct(product: ICreateProductRequest) {
    this.productManagerService.createProduct(product).subscribe(() => {
      this.notification.showSuccess('Product created sucessfully');
      this.getAllProducts();
    });
  }

  private deleteProduct(productId: string) {
    this.productManagerService.deleteProduct(productId).subscribe(() => {
      this.notification.showSuccess('Product deleted sucessfully');
      this.getAllProducts();
    });
  }
}
