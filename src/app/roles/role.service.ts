import { Injectable } from '@angular/core';
import { departments, Employee, employees, locations, Role, roles } from '../../shared/models';
import { DepartmentsEnum, LocationsEnum, RolesEnum } from '../../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  roles: Role[] = [];
  constructor() { 
    this.roles = roles;
  }

  getRole(roleId: string) : (Role | undefined) {
    return roles.find(role => role.id === Number(roleId));
  }

  getDepartment(role: Role) : (DepartmentsEnum | undefined) {
    var dept = departments.find((dept) => dept.id == role.departmentId);
    return dept?.department;
  }

  getLocation(role: Role) : (LocationsEnum | undefined) {
    var loc = locations.find((loc) => loc.id == role.locationId);
    return loc?.location;
  }

  getFilteredEmpl(role: Role): Employee[] {
    const empList = employees.filter((emp) => emp.roleId === role.id);
    return empList;
  }

}
