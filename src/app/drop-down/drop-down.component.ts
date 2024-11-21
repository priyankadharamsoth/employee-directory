import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  imports: [CommonModule],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css'
})
export class DropDownComponent {
  @Input() className!: string;
  @Input() name!: string;
  @Input() id!: string;
  @Input()  options! : Array<{ id: number, [key: string]: any}>;
}
