import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminShopComponent } from './admin-shop.component';
import { AdminShopIncomeComponent } from './admin-shop-income/admin-shop-income.component';
import { AdminShopInShopComponent } from './admin-shop-in-shop/admin-shop-in-shop.component';
import { AdminShopPhotoComponent } from './admin-shop-photo/admin-shop-photo.component';
import { AdminShopDeliveryComponent } from './admin-shop-delivery/admin-shop-delivery.component';
import { AdminShopPhotographComponent } from './admin-shop-photograph/admin-shop-photograph.component';
import { AdminShopDefectComponent } from './admin-shop-defect/admin-shop-defect.component';

const routes: Routes = [
  { path: '', component: AdminShopComponent, children: [
    { path: 'income', component: AdminShopIncomeComponent },
    { path: 'in-shop', component: AdminShopInShopComponent },
    { path: 'photo', component: AdminShopPhotoComponent },
    { path: 'delivery', component: AdminShopDeliveryComponent },
    { path: 'photograph', component: AdminShopPhotographComponent },
    { path: 'defect', component: AdminShopDefectComponent },
    { path: '**', redirectTo: 'income', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminShopRoutingModule { }
