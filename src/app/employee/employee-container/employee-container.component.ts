import { Component, inject } from '@angular/core';
import { Employee, employees } from '../../../shared/models';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-container',
  imports: [CommonModule],
  templateUrl: './employee-container.component.html',
  styleUrl: './employee-container.component.css'
})
export class EmployeeContainerComponent {
    employees : Employee[] = employees;
    employeeService : EmployeeService = inject(EmployeeService);
    
}
