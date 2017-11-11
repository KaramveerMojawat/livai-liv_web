import {
    Directive,
    OnInit,
    ElementRef,
    Renderer2,
    HostBinding,
    Input,

} from '@angular/core';

@Directive({
    selector: '[headerBackground]'
})

export class HeaderLayoutDirective implements OnInit {
    @Input() defaultColor: string = 'rgb(48,35,174)'

    @HostBinding('style.backgroundColor') backgroundColor: string = 'rgb(48,35,174)';
    constructor(private elRef: ElementRef, private renderer: Renderer2){}
    ngOnInit(){
  //      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', )
    }
}
