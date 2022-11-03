import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserReducer } from './user-store/user-reducers';
import { UserEffect } from './user-store/user-effects';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    StoreModule.forFeature('user', UserReducer),
    EffectsModule.forFeature([UserEffect]),
  ],
  providers: [UserService, UserStoreService],
})
export class UserModule {}
