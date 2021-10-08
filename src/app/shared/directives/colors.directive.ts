import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColors]'
})

export class ColorsDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', 'yellow')
  }

}
