import { Component, OnInit } from '@angular/core';
import { LoaderState } from '@core/models/loader';
import { LoaderService } from '@core/services/loader.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  public show = false;

  constructor(private loaderService: LoaderService) {}

  private destroy$ = new Subject<void>();

  public ngOnInit() {
    this.loaderService.loaderState
      .pipe(takeUntil(this.destroy$))
      .pipe()
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
