import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcDirectorComponent } from './ec-director.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { UsersComponent } from './general-settings/users/users.component';
import { AllUsersComponent } from './general-settings/users/all-users/all-users.component';
import { NewUserComponent } from './general-settings/users/new-user/new-user.component';
import { AllGroupsComponent } from './general-settings/users/all-groups/all-groups.component';
import { EcInfoComponent } from './general-settings/ec-info/ec-info.component';
import { InfoComponent } from './general-settings/ec-info/info/info.component';
import { TextsComponent } from './general-settings/ec-info/texts/texts.component';
import { SocialComponent } from './general-settings/ec-info/social/social.component';
import { EditUserComponent } from './general-settings/users/edit-user/edit-user.component';
import { EditGroupComponent } from './general-settings/users/edit-group/edit-group.component';
import { NewSocialComponent } from './general-settings/ec-info/social/new-social/new-social.component';
import { EditSocialComponent } from './general-settings/ec-info/social/edit-social/edit-social.component';
import { EcNotificationComponent } from './general-settings/ec-notification/ec-notification.component';
import { NotificationComponent } from './general-settings/ec-notification/notification/notification.component';
import { EditNotificationComponent } from './general-settings/ec-notification/edit-notification/edit-notification.component';
import { EcShopComponent } from './general-settings/ec-shop/ec-shop.component';
import { ShopsComponent } from './general-settings/ec-shop/shops/shops.component';
import { NewShopComponent } from './general-settings/ec-shop/new-shop/new-shop.component';
import { EditShopComponent } from './general-settings/ec-shop/edit-shop/edit-shop.component';

const routes: Routes = [
  { path: '', component: EcDirectorComponent, children: [

    { path: 'dashboard', component: DashboardComponent },

    { path: 'general-settings', component: GeneralSettingsComponent, children: [

      { path: 'users', component: UsersComponent, children: [
        { path: 'all-users', component: AllUsersComponent },
        { path: 'all-users/new-user', component: NewUserComponent},
        { path: 'all-users/:userId', component: EditUserComponent },
        { path: 'all-groups', component: AllGroupsComponent },
        { path: 'all-groups/:groupId', component: EditGroupComponent },
        { path: '**', redirectTo: 'all-users', pathMatch: 'full' }
      ]},
      { path: 'ec-info', component: EcInfoComponent, children: [
        { path: 'info', component: InfoComponent },
        { path: 'texts', component: TextsComponent },
        { path: 'social', component: SocialComponent },
        { path: 'social/new-social', component: NewSocialComponent },
        { path: 'social/:id', component: EditSocialComponent },
        { path: '**', redirectTo: 'info', pathMatch: 'full' }
      ]},
      { path: 'ec-notification', component: EcNotificationComponent, children: [
        { path: 'notification', component: NotificationComponent },
        { path: 'notification/:id', component: EditNotificationComponent }
      ]},
      { path: 'ec-shop', component: EcShopComponent, children: [
        { path: 'shops', component: ShopsComponent },
        { path: 'shops/new-shop', component: NewShopComponent },
        { path: 'shops/:id', component: EditShopComponent }
      ]},
      
      { path: '**', redirectTo: 'users', pathMatch: 'full' }
    ]},

    { path: '**', redirectTo: 'general-settings', pathMatch: 'full' }
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcDirectorRoutingModule { }
