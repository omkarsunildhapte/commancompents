import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { SnakbarComponent } from './snakbar/snakbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnakbarService {
  constructor(private snackBar: MatSnackBar) { }

  showSuccessSnackBar(message: string, duration: number = 3000): MatSnackBarRef<SimpleSnackBar> {
    const action = 'Dismiss';
    return this.openSnackBar(message, action, duration, 'success-snackbar');
  }

  showWarningSnackBar(message: string, duration: number = 3000): MatSnackBarRef<SimpleSnackBar> {
    const action = 'Dismiss';
    return this.openSnackBar(message, action, duration, 'warning-snackbar');
  }

  showErrorSnackBar(message: string, duration: number = 3000): MatSnackBarRef<SimpleSnackBar> {
    const action = 'Dismiss';
    return this.openSnackBar(message, action, duration, 'error-snackbar');
  }

  private openSnackBar(
    message: string,
    action: string,
    duration: number,
    panelClass: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration,
      panelClass: ['my-snackbar', panelClass],
    });
  }
}
