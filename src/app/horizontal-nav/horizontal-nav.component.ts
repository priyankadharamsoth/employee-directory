import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-horizontal-nav',
  imports: [CommonModule],
  templateUrl: './horizontal-nav.component.html',
  styleUrl: './horizontal-nav.component.css'
})
export class HorizontalNavComponent {
  @Input() isNavbarVisible!: boolean;  // Receive navbar visibility state from parent
  @Output() hideNavBar = new EventEmitter<void>(); // Event emitter for hiding navbar

  // This method will be triggered when the navbar is clicked to toggle visibility
  toggleNavbar() {
    this.hideNavBar.emit();  
    console.log('Navbar toggle clicked');
  }

}
