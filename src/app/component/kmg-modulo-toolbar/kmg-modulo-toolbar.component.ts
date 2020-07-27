import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DashboardkmgService } from '@app/service/variable/dashboardkmg.service';

enum ButtomState {
  lock = "more_vert",
  unlock = "dashboard"
};

@Component({
  selector: 'app-kmg-modulo-toolbar',
  templateUrl: './kmg-modulo-toolbar.component.html',
  styleUrls: ['./kmg-modulo-toolbar.component.scss']
})
export class KmgModuloToolbarComponent implements OnInit, OnDestroy {

  public dashboardObservable: Observable<boolean>;
  public dashboardChange: boolean;
  public dashboardSubcription: Subscription;

  public dashboardButtom: ButtomState;

  constructor(
    private dashboardService: DashboardkmgService
  ) { }

  ngOnInit() {
    this.dashboardObservable = this.dashboardService.getState();
    this.dashboardSubcription = this.dashboardObservable.subscribe(state => {
      this.dashboardChange = state;
    })
    this.dashboardButtom = (this.dashboardService.isLock()) ? ButtomState.lock : ButtomState.unlock;
  }

  dashboardToggle(): void {
    if (!this.dashboardService.isLock()) {
      this.dashboardButtom = ButtomState.lock;
      this.dashboardService.openState();
      this.dashboardService.toggleLock();
    } else {
      this.dashboardButtom = ButtomState.unlock;
      this.dashboardService.closeState();
      this.dashboardService.toggleLock();
    }
  }

  ngOnDestroy() {
    this.dashboardSubcription.unsubscribe();
  }

}
