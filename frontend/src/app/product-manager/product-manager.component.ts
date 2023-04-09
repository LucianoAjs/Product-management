import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { IProductResponse } from '@core/models/product-response.model';
import { currency } from '@shared/utils/currency.utils';
import { convertDate } from '@shared/utils/date.utils';
import { debounce } from '@shared/utils/debounce.utils';
import { ProductManagerService } from 'app/product-manager/product-manager.service';

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
  ) {}

  public searchForm = this.formBuilder.group({
    category: new FormControl(''),
  });

  public list_items: Array<IProductResponse> = [];

  public formatCurrency = currency;
  public covertDateToPtBr = convertDate;

  public ngOnInit(): void {
    this.getAllPolicies();

    this.searchForm.valueChanges.subscribe(() => {
      debounce(this.getAllPolicies.bind(this), 1000, 'getPolicyData');
    });
  }

  private getAllPolicies() {
    const query = this.searchForm.get('category')?.value?.trim();

    this.productManagerService
      .getAllProducts(query)
      .subscribe((products: IProductResponse[]) => {
        this.list_items = products;
      });
  }
}
