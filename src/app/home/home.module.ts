import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RegisterComponent } from '../components/register/register.component';

import { HomePageRoutingModule } from './home-routing.module';
import { RegisterComponentModule } from '../components/register/register.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RegisterComponentModule,

  ],
  declarations: [HomePage]
})
export class HomePageModule { }
