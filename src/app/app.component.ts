import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./employee/header/header.component";
import { SearchComponent } from "./search/search.component";
import { AlphabetComponent } from "./employee/alphabet/alphabet.component";
import { CategoryComponent } from "./employee/category/category.component";
import { EmployeeContainerComponent } from "./employee/employee-container/employee-container.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchComponent, AlphabetComponent, CategoryComponent, EmployeeContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tezo-employees';
}
