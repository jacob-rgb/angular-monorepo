import { ProductsApi } from "./api/products.api";
import { ProductsService } from "./products.service";
import { ProductState } from "./state/product.state";

export const ProductServiceProviders = [
    ProductsService,
    ProductState,
    ProductsApi
]