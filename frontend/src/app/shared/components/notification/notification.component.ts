import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

interface INotificationData {
  message: string;
  action?: string;
  severity?: string;
  summary?: string;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: INotificationData,
    private snackBarRef: MatSnackBarRef<NotificationComponent>,
  ) {}

  public close() {
    this.snackBarRef.dismiss();
  }
}
