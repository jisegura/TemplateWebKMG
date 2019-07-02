import { Component } from '@angular/core';
import { TemplatekmgVariableService } from '@app/service/variable/templatekmg-variable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TemplateKMG';

  constructor(
  	private templateService: TemplatekmgVariableService
  ) {}

  setLinkParams(link):Object {
  	return { name: link.getUrl() };
  }
}
