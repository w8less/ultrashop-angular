import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminShopRoutingModule } from './admin-shop-routing.module';
import { AdminShopComponent } from './admin-shop.component';
import { AdminShopIncomeComponent } from './admin-shop-income/admin-shop-income.component';
import { AdminShopInShopComponent } from './admin-shop-in-shop/admin-shop-in-shop.component';
import { AdminShopPhotoComponent } from './admin-shop-photo/admin-shop-photo.component';
import { AdminShopDeliveryComponent } from './admin-shop-delivery/admin-shop-delivery.component';
import { AdminShopPhotographComponent } from './admin-shop-photograph/admin-shop-photograph.component';
import { AdminShopDefectComponent } from './admin-shop-defect/admin-shop-defect.component';
import { MaterialModule } from '../shared/global_modules/material.module';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { GlobalComponentsModule } from '../shared/global_components/global-components.module';

@NgModule({
  declarations: [
    AdminShopComponent, 
    AdminShopIncomeComponent, 
    AdminShopInShopComponent, 
    AdminShopPhotoComponent, 
    AdminShopDeliveryComponent, 
    AdminShopPhotographComponent, 
    AdminShopDefectComponent,
  ],
  imports: [
    CommonModule,
    AdminShopRoutingModule,
    MaterialModule,
    MalihuScrollbarModule.forRoot(),
    GlobalComponentsModule,
  ]
})
export class AdminShopModule { }
