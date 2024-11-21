import { Injectable } from '@angular/core';
import { Department, departments, Employee, employees, locations, Locations, Role, roles, StatusOptions, statusOptions } from '../../shared/models';
import { DepartmentsEnum, LocationsEnum, RolesEnum, StatusEnum } from '../../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: Employee[] = [];
  constructor() { 
    this.employeeList = employees;
  }

  getEmployee(employeeId: string) : (Employee | undefined) {
    return employees.find(emp => emp.id === Number(employeeId));
  }

  updateEmployee(updatedEmployee: Employee): void {
    const index = employees.findIndex(emp => emp.id === updatedEmployee.id);
    if (index !== -1) {
      employees[index] = updatedEmployee;
    }
  }

  getDepartment(employee: Employee) : (DepartmentsEnum | undefined) {
    var dept = departments.find((dept) => dept.id == employee.deptId);
    return dept?.department;
  }

  getRole(employee: Employee) : (RolesEnum | undefined) {
    var role = roles.find((role) => role.id == employee.roleId);
    return role?.role;
  }

  getStatus(employee: Employee) : (StatusEnum| undefined) {
    var status = statusOptions.find((status) => status.id == employee.statusId);
    return status?.status;
  }

  getLocation(employee: Employee) : (LocationsEnum | undefined) {
    var loc = locations.find((loc) => loc.id == employee.locationId);
    return loc?.location;
  }
}

