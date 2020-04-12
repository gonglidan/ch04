import { Component, Input } from "@angular/core";

@Component({
    selector: 'products-image',
    template: `
    <img [src]="url" class="image-thumbnail">`,
    styles: ['img{width:9rem; height:9rem}']
})
export class ProductimageComponent {
    @Input() url: string;
}