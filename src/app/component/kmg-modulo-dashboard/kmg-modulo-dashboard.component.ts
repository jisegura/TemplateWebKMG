import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { onSideNavChange, animateText } from '@app/animation/dashboard.animation';
import { DashboardkmgService } from '@app/service/variable/dashboardkmg.service';
import { TemplatekmgVariableService } from '@app/service/variable/templatekmg-variable.service';
import { MenuKMG } from '@app/model/menukmg.model';

@Component({
  selector: 'app-kmg-modulo-dashboard',
  templateUrl: './kmg-modulo-dashboard.component.html',
  styleUrls: ['./kmg-modulo-dashboard.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class KmgModuloDashboardComponent implements OnInit, OnDestroy {

  public dashboardObservable: Observable<boolean>;
  public dashboardChange: boolean;
  public dashboardSubscription: Subscription;

  public routeSubscription: Subscription;
  public menus: MenuKMG[];

  public linkText: boolean;

  constructor(
    private dashboardService: DashboardkmgService,
    private templateService: TemplatekmgVariableService,
    private route: ActivatedRoute
  ) {
    this.linkText = false;
  }

  ngOnInit() {
    this.dashboardObservable = this.dashboardService.getState();
    this.dashboardSubscription = this.dashboardObservable.subscribe(dashboardState => {
      setTimeout(() => {
        this.linkText = dashboardState;
      }, 200);
      this.dashboardChange = dashboardState;
    })

    this.routeSubscription = this.route.params.subscribe(params => {
      this.menus = this.templateService.getMenus(params['id']);
    });
  }

  ngOnDestroy() {
    this.dashboardSubscription.unsubscribe();

    this.routeSubscription.unsubscribe();
  }

}
