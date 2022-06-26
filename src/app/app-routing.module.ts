import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {CustomerAccountsComponent} from "./customer-accounts/customer-accounts.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path:"customers", component:CustomersComponent},
  { path:"accounts", component:AccountsComponent},
  { path:"new-customer", component:NewCustomerComponent},
  { path:"customer-accounts/:id", component:CustomerAccountsComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
