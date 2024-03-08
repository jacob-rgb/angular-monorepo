import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsApi {

    private readonly _baseHref = '';

    public getProducts(): Observable<Product> {
        return of({ id: 0 })
    }
}