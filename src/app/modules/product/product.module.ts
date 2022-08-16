import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { FashionComponent } from './dashboard/fashion/fashion.component';
import { HouseHoldComponent } from './dashboard/house-hold/house-hold.component';
import { KitchenComponent } from './dashboard/kitchen/kitchen.component';
import { ElectronicsComponent } from './dashboard/electronics/electronics.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';


const routes :Routes = [
  {path:'',component:DashboardComponent,
children:[
  {path:'',outlet:"product",component:NotfoundComponent},
  {path:'electronics',outlet:"product",component:ElectronicsComponent},
  {path:'kitchen',outlet:'product',component:KitchenComponent},
  {path:'houseHold',outlet:'product',component:HouseHoldComponent},
  {path:'fashion',outlet:'product',component:FashionComponent}
]}
];


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ElectronicsComponent,
    KitchenComponent,
    HouseHoldComponent,
    FashionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
