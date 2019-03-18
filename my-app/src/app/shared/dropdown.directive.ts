import {Directive, HostBinding, HostListener} from '@angular/core'; // ElementRef, Renderer2

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') dropdownIsOpen = false;

  constructor() { // private  elRef: ElementRef, private renderer: Renderer2

  }

  @HostListener('click') onDropdownClicked() {
    if (!this.dropdownIsOpen) {
      // this.renderer.addClass(this.elRef.nativeElement, 'open');
      this.dropdownIsOpen = !this.dropdownIsOpen;
    } else {
      // this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.dropdownIsOpen = !this.dropdownIsOpen;
    }
  }

   @HostListener('mouseleave') onMouseLeave() {  // eventData: Event
    if (this.dropdownIsOpen) {
      // this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.dropdownIsOpen = !this.dropdownIsOpen;
    }
  }
}
