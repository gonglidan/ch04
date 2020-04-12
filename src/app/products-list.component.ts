import { Component, Output, EventEmitter } from "@angular/core";
import { product } from './product';


@Component({
    selector: 'products-list',
    templateUrl: 'products-list.component.html',
    styleUrls: ['products-list.component.css'],
    inputs: ['productslist']
})
export class ProductslistComponent {
    productslist: product[];

    @Output() productSelected: EventEmitter<product>;
    currentProduct: product = null;
    constructor() { this.productSelected = new EventEmitter(); }
    onProductClicked(product: product) {
        this.currentProduct = product;
        console.log('product:' + product.name + 'is selected!');
        this.productSelected.emit(product);
    }

    isSelected(product: product) {
        if (this.currentProduct === null || product === null) { return false; }
        return product.sku === this.currentProduct.sku;
    }
}