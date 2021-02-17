import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLocate]'
})
export class LocateDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.textDecoration='line-through';
   }

}
