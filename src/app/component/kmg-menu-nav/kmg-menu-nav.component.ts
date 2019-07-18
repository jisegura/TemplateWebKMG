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
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id4
      this.menus = this.templateService.getMenus(params['id']);
      console.log(this.menus);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
