import { Directive, ElementRef, HostListener, Input} from '@angular/core';

// @Input

@Directive({
  selector: '[appZoomImage]'
})
export class ZoomImageDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.zoom(true);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.zoom(false);
  }
  
  private zoom( status :boolean) {
    if(status){
      this.el.nativeElement.style.filter="grayscale(100%)";         
    }else{
      this.el.nativeElement.style.filter="none";
    }
    
  }

}
