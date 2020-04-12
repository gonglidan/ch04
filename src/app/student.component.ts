import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'student',
    inputs: ['name'],
    template: `
    1 <p (click)="onClicked()">{{name}}</p>
         `
})
export class Student {
    name: string;
    @Output() studentSelected: EventEmitter<string>;
    constructor() {
        this.studentSelected = new EventEmitter();
    }

    onClicked() { this.studentSelected.emit(this.name); }
}