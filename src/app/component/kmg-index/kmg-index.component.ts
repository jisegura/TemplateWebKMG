import { Component, OnInit } from '@angular/core';
import { TemplatekmgVariableService } from '@app/service/variable/templatekmg-variable.service';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, collapseAnimation } from 'angular-animations';

@Component({
  selector: 'app-kmg-index',
  templateUrl: './kmg-index.component.html',
  styleUrls: ['./kmg-index.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    collapseAnimation()
  ]
})
export class KmgIndexComponent implements OnInit {

  condition: boolean[] = [];

  constructor(
  	private templateService: TemplatekmgVariableService
  ) { }

  ngOnInit() {
  }

  mouseEnter(url: string): void {
    this.condition[url] = true;
  }

  mouseLeave(url: string): void {
    this.condition[url] = false;
  }

}
