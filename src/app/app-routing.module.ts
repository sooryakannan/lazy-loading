import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'employee',loadChildren:()=>import('./modules/employee/employee.module').then(m=>m.EmployeeModule)},
  {path:'product',loadChildren:()=>import('./modules/product/product.module').then(m=>m.ProductModule)},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
