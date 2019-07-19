import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplatekmgVariableService } from '@app/service/variable/templatekmg-variable.service';
import { MenuKMG } from '@app/model/menukmg.model';

@Component({
  selector: 'app-kmg-menu-nav',
  templateUrl: './kmg-menu-nav.component.html',
  styleUrls: ['./kmg-menu-nav.component.scss']
})
export class KmgMenuNavComponent implements OnInit, OnDestroy {

  public routeSub;
  public menus: MenuKMG[];

  constructor(
    private templateService: TemplatekmgVariableService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.menus = this.templateService.getMenus(params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
