import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[italic]'
})

export class ItalicDirective {

    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.hover(true);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hover(false);
    }

    hover(shouldItalic: boolean) {
        if (shouldItalic) {
            this.renderer.setElementStyle(this.el.nativeElement, 'font-style', 'italic');
        } else {
            this.renderer.setElementStyle(this.el.nativeElement, 'font-style', 'normal');
        }
    }
}