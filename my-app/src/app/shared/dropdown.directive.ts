import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  dropdownIsOpen = false;

  constructor(private  elRef: ElementRef, private renderer: Renderer2 ) {

  }

  @HostListener('click') onDropdownClicked() {
    if (!this.dropdownIsOpen) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
      this.dropdownIsOpen = !this.dropdownIsOpen;
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.dropdownIsOpen = !this.dropdownIsOpen;
    }
  }

   @HostListener('mouseleave') onMouseLeave() {  // eventData: Event
    if (this.dropdownIsOpen) {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.dropdownIsOpen = !this.dropdownIsOpen;
    }
  }
}
