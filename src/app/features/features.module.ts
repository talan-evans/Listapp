import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListSummaryComponent } from './list-summary/list-summary.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ItemComponent } from './item/item.component';
import { ListCreateComponent } from './list-create/list-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, DashboardComponent, ListSummaryComponent, ListDetailComponent, ItemComponent, ListCreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class FeaturesModule { }
