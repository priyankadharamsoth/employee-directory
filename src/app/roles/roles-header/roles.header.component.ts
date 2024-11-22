import { Component } from '@angular/core';
import { DropDownComponent } from "../../drop-down/drop-down.component";
import { Department, departments, locations, Locations, statusOptions, StatusOptions } from '../../../shared/models';

@Component({
  selector: 'app-roles-header',
  imports: [DropDownComponent],
  templateUrl: './roles.header.component.html',
  styleUrl: './roles.header.component.css'
})
export class RolesHeaderComponent {
  statusList : StatusOptions[] = statusOptions;
  locations : Locations[] = locations;
  depatments: Department[] = departments;


  className: string = 'filter-category';

  location : string = 'location';
  locationId : string = 'role-location-dropdown';

  dept : string = 'department';
  deptId : string = 'role-dept-dropdown';
}
