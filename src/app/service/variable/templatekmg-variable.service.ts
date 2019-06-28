import { Injectable } from '@angular/core';
import { TemplateWebKMG } from '@app/model/templatekmg.model';

@Injectable({
  providedIn: 'root'
})
export class TemplatekmgVariableService {

  private template_variables: TemplateWebKMG;

  constructor() {
    this.template_variables = {
      name: "KMG",
      logo: "logo.svg"
    } as TemplateWebKMG;
  }

  public getName(): string{
    return this.template_variables.name;
  }

  public getLogo(): string{
    return "assets/images/" + this.template_variables.logo;
  }
}
