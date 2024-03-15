import { ProductsService } from '@angular-monorepo/products/data-access';
import {
  CardItemComponent,
  GalleryListComponent,
} from '@angular-monorepo/shared/shared-ui';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    CardItemComponent,
    GalleryListComponent,
  ],
  selector: 'app-angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'inventory';

  private readonly _productSrv = inject(ProductsService);
  readonly product = this._productSrv.product.getValue();
  readonly isProductLoading = this._productSrv.product.isLoading();

  constructor() {
    this._productSrv.product.load();
  }

  readonly list = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
  ];
}
