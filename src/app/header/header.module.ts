import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopActionsComponent } from './top-actions/top-actions.component';
import { MiddleActionsComponent } from './middle-actions/middle-actions.component';
import { BottomActionsComponent } from './bottom-actions/bottom-actions.component';
import { SearchboxModule } from '../searchbox/searchbox.module';
import { ProfileModule } from '../profile/profile.module';
import { NotificationsModule } from '../notifications/notifications.module';



@NgModule({
  declarations: [
    HeaderComponent,
    TopActionsComponent,
    MiddleActionsComponent,
    BottomActionsComponent
  ],
  imports: [
    SearchboxModule,
    ProfileModule,
    NotificationsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
