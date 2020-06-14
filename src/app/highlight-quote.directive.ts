import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightQoute]'
})
export class HighlightQuoteDirective {

  constructor(private elem:ElementRef) { 
  }
  @HostListener("click") onClicks(){
    this.cardDeco("none")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.cardDeco("rgba(139, 210, 221, 0.301)")
  }
  private cardDeco(action:string){
    this.elem.nativeElement.style.background=action; 
  }

}