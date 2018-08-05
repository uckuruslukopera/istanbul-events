import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '../../../../node_modules/@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserProfileComponent]
})
export class UserModule { }
