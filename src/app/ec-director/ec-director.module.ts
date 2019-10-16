import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcDirectorRoutingModule } from './ec-director-routing.module';
import { EcDirectorComponent } from './ec-director.component';

import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { AllUsersComponent } from './general-settings/users/all-users/all-users.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../shared/global_modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersComponent } from './general-settings/users/users.component';
import { NotifierModule } from 'angular-notifier';
import { NewUserComponent } from './general-settings/users/new-user/new-user.component';
import { AllGroupsComponent } from './general-settings/users/all-groups/all-groups.component';
import { EcInfoComponent } from './general-settings/ec-info/ec-info.component';
import { InfoComponent } from './general-settings/ec-info/info/info.component';
import { TextsComponent } from './general-settings/ec-info/texts/texts.component';
import { SocialComponent } from './general-settings/ec-info/social/social.component';
import { EditUserComponent } from './general-settings/users/edit-user/edit-user.component';
import { EditGroupComponent } from './general-settings/users/edit-group/edit-group.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ElementsComponent } from './general-settings/ec-info/texts/elements/elements.component';
import { NewSocialComponent } from './general-settings/ec-info/social/new-social/new-social.component';
import { EditSocialComponent } from './general-settings/ec-info/social/edit-social/edit-social.component';
import { FileAccessorModule } from '../shared/file-accessor/file-accessor.module';
import { EcNotificationComponent } from './general-settings/ec-notification/ec-notification.component';
import { NotificationComponent } from './general-settings/ec-notification/notification/notification.component';
import { EditNotificationComponent } from './general-settings/ec-notification/edit-notification/edit-notification.component';
import { EcShopComponent } from './general-settings/ec-shop/ec-shop.component';
import { ShopsComponent } from './general-settings/ec-shop/shops/shops.component';
import { NewShopComponent } from './general-settings/ec-shop/new-shop/new-shop.component';
import { EditShopComponent } from './general-settings/ec-shop/edit-shop/edit-shop.component';
import { AgmCoreModule } from '@agm/core';
import { GlobalComponentsModule } from '../shared/global_components/global-components.module';


@NgModule({
  declarations: [
    EcDirectorComponent, 
    SideBarComponent, 
    AllUsersComponent, 
    GeneralSettingsComponent, 
    DashboardComponent, 
    UsersComponent, 
    InfoComponent, 
    NewUserComponent, 
    AllGroupsComponent,
    EcInfoComponent,
    TextsComponent, 
    SocialComponent,
    EditUserComponent,
    EditGroupComponent,
    ElementsComponent,
    NewSocialComponent,
    EditSocialComponent,
    EcNotificationComponent,
    NotificationComponent,
    EditNotificationComponent,
    EcShopComponent,
    ShopsComponent,
    NewShopComponent,
    EditShopComponent,
  ],
  imports: [
    CommonModule,
    EcDirectorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NotifierModule,
    CKEditorModule,
    FileAccessorModule,
    GlobalComponentsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCar0kmHj6LjNM47fbiKyXpJTdZ6KjW8vc'
    })
  ],
  exports: [
    DashboardComponent, 
    GeneralSettingsComponent, 
    EcDirectorComponent,
    NotifierModule,
    CKEditorModule,
  ]
})
export class EcDirectorModule { }
