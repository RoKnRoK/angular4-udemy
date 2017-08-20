import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    //private closed:boolean= true;

    @HostBinding('class.open') isOpened:boolean= false;

    @HostListener('click') onClick() {
        /*if (this.closed) {
            this.renderer.addClass(this.element.nativeElement, 'open');
        }
        else {
            this.renderer.removeClass(this.element.nativeElement, 'open');
        }*/
        this.isOpened = !this.isOpened;
    }

    constructor(private renderer:Renderer2, private element:ElementRef) {
        console.log(this.element);
    }

}
