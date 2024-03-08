import { Injectable, inject } from '@angular/core';
import { ProductState } from './state/product.state';
import { StateManagement } from '@angular-monorepo/utils';
import { ProductsApi } from './api/products.api';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _state = inject(ProductState);
  private readonly _api = inject(ProductsApi);

  public product = Object.freeze({
    getValue: () =>  this._state.product.$value,
    isLoading: () => this._state.product.$isLoading,
    error: () => this._state.product.$error,
    load: () => StateManagement.load(
      this._state.product,
      this._api.getProducts()
    )
  });

}
