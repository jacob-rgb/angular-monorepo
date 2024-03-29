import { StateProperty } from '@angular-monorepo/shared/utils';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable()
export class ProductState {
  readonly product = new StateProperty<Product>();
}
