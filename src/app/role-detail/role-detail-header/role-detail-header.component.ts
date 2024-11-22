import { Component, inject } from '@angular/core';
import { Employee, employees } from '../../../shared/models';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../employee/employee.service';

@Component({
  selector: 'app-role-detail-header',
  imports: [CommonModule],
  templateUrl: './role-detail-header.component.html',
  styleUrl: './role-detail-header.component.css'
})
export class RoleDetailHeaderComponent {
  employees : Employee[] = employees;
  employeeService : EmployeeService = inject(EmployeeService);
}
