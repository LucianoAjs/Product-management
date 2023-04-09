import { Injectable } from '@angular/core';
import { LoaderState } from '@core/models/loader';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  public loaderState = this.loaderSubject.asObservable();

  constructor() {}

  public show() {
    this.loaderSubject.next({ show: true });
  }

  public hide() {
    this.loaderSubject.next({ show: false });
  }
}
