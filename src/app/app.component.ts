import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TemplatekmgVariableService } from '@app/service/variable/templatekmg-variable.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TemplateKMG';
  public isIndex: boolean;

  constructor(
  	private templateService: TemplatekmgVariableService,
  	private readonly router: Router
  ) {
  	router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
  	  this.isIndex = event.urlAfterRedirects === '/home';
    });
  }
}
