import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLocate]'
})
export class LocateDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.textDecoration='line-through';
   }
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
  private textDeco(action:string) {
    this.elem.nativeElement.style.textDecoration=action;
  }

}
