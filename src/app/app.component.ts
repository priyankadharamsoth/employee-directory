import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./employee/header/header.component";
import { SearchComponent } from "./search/search.component";
import { AlphabetComponent } from "./employee/alphabet/alphabet.component";
import { CategoryComponent } from "./employee/category/category.component";
import { EmployeeContainerComponent } from "./employee/employee-container/employee-container.component";
import { HorizontalNavComponent } from "./horizontal-nav/horizontal-nav.component";
import { CommonModule } from '@angular/common';
import { RolesHeaderComponent } from "./roles/roles-header/roles.header.component";
import { RolesComponent } from './roles/roles/roles.component';
import { Employee, Role, roles } from '../shared/models';
import { RoleService } from './roles/role.service';
import { RoleDetailComponent } from "./role-detail/role-detail/role-detail.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchComponent, AlphabetComponent, CategoryComponent, EmployeeContainerComponent, HorizontalNavComponent, CommonModule, RolesComponent, RolesHeaderComponent, RoleDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tezo-employees';
  isNavBarVisible: boolean = true;

  roles : Role[] = roles;
  rolesService : RoleService = inject(RoleService);
  filteredEmpl(role : Role) : Employee[] {
    return this.rolesService.getFilteredEmpl(role);
  }

  hideNavBar() {
    this.isNavBarVisible = !this.isNavBarVisible;  // Toggle the navbar visibility
  }
}
