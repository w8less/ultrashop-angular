import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../app/shared/guards/auth.guard'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ec-director', loadChildren: './ec-director/ec-director.module#EcDirectorModule', canActivate: [AuthGuard] },
  { path: 'admin-shop', loadChildren: './admin-shop/admin-shop.module#AdminShopModule', canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
