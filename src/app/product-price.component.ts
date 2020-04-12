import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-price',
    template: `
    \${{price}}
    `
})
export class ProductpriceComponent {
    @Input() price: number;

    constructor() {

    }
}