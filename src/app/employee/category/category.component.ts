import { Component } from '@angular/core';
import { DropDownComponent } from "../../drop-down/drop-down.component";
import { Department, departments, Locations, locations, StatusOptions,statusOptions } from '../../../shared/models';
import { stat } from 'fs';

@Component({
  selector: 'app-category',
  imports: [DropDownComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  statusList : StatusOptions[] = statusOptions;
  locations : Locations[] = locations;
  depatments: Department[] = departments;


  className: string = 'filter-category';

  status : string = 'status';
  statusId : string = 'status-dropdown';

  location : string = 'location';
  locationId : string = 'location-dropdown';

  dept : string = 'department';
  deptId : string = 'dept-dropdown';
}
