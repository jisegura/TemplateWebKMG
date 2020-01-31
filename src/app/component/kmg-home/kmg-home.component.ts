import { Component, OnInit } from '@angular/core';
import { TemplatekmgVariableService } from '@app/service/variable/templatekmg-variable.service';

@Component({
  selector: 'app-kmg-home',
  templateUrl: './kmg-home.component.html',
  styleUrls: ['./kmg-home.component.scss']
})
export class KmgHomeComponent implements OnInit {

  constructor(
    private templateService: TemplatekmgVariableService
  ) { }

  ngOnInit() {
  }

}
