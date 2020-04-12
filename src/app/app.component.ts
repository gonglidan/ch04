import { Component } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: product[];

  constructor() {
    this.products = [
      new product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/4.9imgs/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/4.9imgs/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/4.9imgs/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  onProductSelected(product: product) {
    console.log('在根组件中，响应产品:' + product.name + '选中事件！！');
  }
}

