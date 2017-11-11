import {Directive, OnInit, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[headerBackground]'
})

export class HeaderLayoutDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2){}
    ngOnInit(){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgb(48,35,174)')
    }
}
