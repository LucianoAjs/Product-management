import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '@shared/components/notification/notification.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public globalSnackBar: any;

  constructor(public snackBar: MatSnackBar, private zone: NgZone) {}

  public showSuccess(message: string): void {
    this.zone.run(() => {
      this.globalSnackBar = this.openSnackBar(message, 'success', 3000);
    });
  }

  public showWarning(message: string): void {
    this.zone.run(() => {
      this.globalSnackBar = this.openSnackBar(message, 'warning', 3000);
    });
  }

  public showError(message: string): void {
    this.zone.run(() => {
      this.globalSnackBar = this.openSnackBar(message, 'error', 3000);
    });
  }

  public openSnackBar(
    message: string,
    panelClass: string,
    secondsDuration: number,
  ) {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: {
        message,
        action: 'close',
      },
      panelClass: ['global-snack-bar', panelClass, 'notification'],
      duration: secondsDuration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
