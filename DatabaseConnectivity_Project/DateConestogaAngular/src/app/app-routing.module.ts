import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { FindMatchComponent } from './find-match/find-match.component'

const routes: Routes = [
    {
      path: '',
      component : LoginComponent
    },
    {
      path : 'create',
      component: ManageProfileComponent
    },
    {
      path : 'findmatch',
      component: FindMatchComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
