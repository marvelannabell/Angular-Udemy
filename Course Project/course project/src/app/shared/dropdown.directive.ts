

//If you want that a dropdown can also be closed by a click anywhere outside
import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}


// import { Directive, HostListener,HostBinding } from "@angular/core";

// @Directive({
//     selector: '[appDropdown]'
// })
// export class DropdownDirective {
//     @HostBinding('class.open') isOpen = false;
//     @HostListener('click') toggleOpen() {
//         this.isOpen = !this.isOpen
//     }
// }