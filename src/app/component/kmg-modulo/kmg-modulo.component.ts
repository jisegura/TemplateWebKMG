import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DashboardkmgService } from '@app/service/variable/dashboardkmg.service';
import { onMainContentChange } from '@app/animation/dashboard.animation';

@Component({
  selector: 'app-kmg-modulo',
  templateUrl: './kmg-modulo.component.html',
  styleUrls: ['./kmg-modulo.component.scss'],
  animations: [ onMainContentChange ]
})
export class KmgModuloComponent implements OnInit, OnDestroy {

  public dashboardObservable: Observable<boolean>;
  public dashboardChange: boolean;
  public dashboardSubcription: Subscription;

  constructor(
    private dashboardService: DashboardkmgService
  ) {}

  ngOnInit() {
    this.dashboardObservable = this.dashboardService.getState();
    this.dashboardSubcription = this.dashboardObservable.subscribe(state => {
      this.dashboardChange = state;
    })
  }

  mouseEnter(): void{
    if (!this.dashboardService.isLock()) {
      this.dashboardService.toggleState();
    }
  }

  mouseLeave(): void{
    if (!this.dashboardService.isLock()) {
      this.dashboardService.toggleState();
    }
  }

  ngOnDestroy() {
    this.dashboardSubcription.unsubscribe();
  }

}