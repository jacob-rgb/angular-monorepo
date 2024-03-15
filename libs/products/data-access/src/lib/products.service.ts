import { StateManagement } from '@angular-monorepo/shared/utils';
import { Injectable, inject } from '@angular/core';
import { ProductsApi } from './api/products.api';
import { ProductState } from './state/product.state';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _state = inject(ProductState);
  private readonly _api = inject(ProductsApi);

  public product = Object.freeze({
    getValue: () => this._state.product.$value,
    isLoading: () => this._state.product.$isLoading,
    error: () => this._state.product.$error,
    load: () =>
      StateManagement.load(this._state.product, this._api.getProducts()),
  });
}
