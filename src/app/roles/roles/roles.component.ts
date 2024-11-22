import { Component, inject, Input } from '@angular/core';
import { Employee, employees, Role, roles } from '../../../shared/models';
import { CommonModule } from '@angular/common';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-roles',
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css','../roles-header/roles.header.component.css']
})
export class RolesComponent {
   roles : Role[] = roles;
   rolesService : RoleService = inject(RoleService);
   filteredEmpl(role : Role) : Employee[] {
     return this.rolesService.getFilteredEmpl(role);
   }
}
