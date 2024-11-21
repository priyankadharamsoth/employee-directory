import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  imports: [CommonModule],
  templateUrl: './alphabet.component.html',
  styleUrl: './alphabet.component.css'
})
export class AlphabetComponent {
  numbers: number[] = Array.from({ length: 26 }, (_, i) => i);
  alphabet(index: number) {
    return String.fromCharCode(65 + index) 
  }

}
