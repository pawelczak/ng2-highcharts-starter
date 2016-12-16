// 3d party imports
import { Directive, Input, ElementRef } from '@angular/core';


@Directive({
    selector: '[starColor]'
})
export class StarColorDirective {

    private el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @Input() set starColor(starCount: number) {
        this.setElementColor(starCount);
    }


    private setElementColor(starCount: number) {
        if (starCount > 3000) {
            this.el.style.color = '#444';
        } else if (starCount > 1500) {
            this.el.style.color = '#666';
        } else if (starCount > 750) {
            this.el.style.color = '#888';
        } else {
            this.el.style.color = '#aaa';
        }
    }
}
