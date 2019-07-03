import { Component, OnInit } from '@angular/core';
import { TemplatekmgVariableService } from '@app/service/variable/templatekmg-variable.service';

@Component({
  selector: 'app-kmg-navbar',
  templateUrl: './kmg-navbar.component.html',
  styleUrls: ['./kmg-navbar.component.scss']
})
export class KmgNavbarComponent implements OnInit {

  constructor(
  	private templateService: TemplatekmgVariableService
  ) { }

  ngOnInit() {
  }

}
