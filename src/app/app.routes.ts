import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles/roles.component';
import { RoleDetailComponent } from './role-detail/role-detail/role-detail.component';

export const routes: Routes = [
    {path:'',component: AppComponent},
    {path:'roles',component: RolesComponent},
    {path:'details',component: RoleDetailComponent}
];
