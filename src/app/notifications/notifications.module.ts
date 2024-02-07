import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';


@NgModule({
  declarations: [
    NotificationsComponent
  ],
  exports: [
    NotificationsComponent
  ]
})
export class NotificationsModule { }
