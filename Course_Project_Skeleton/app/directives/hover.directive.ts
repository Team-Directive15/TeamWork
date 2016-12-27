import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[hover]'
})

export class HoverDirective {
    constructor(private element: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('orange');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.element.nativeElement.style.backgroundColor = color;
    }
}