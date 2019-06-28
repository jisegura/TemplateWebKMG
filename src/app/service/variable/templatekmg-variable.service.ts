import { Injectable } from '@angular/core';
import { TemplateUrlKMG } from '@app/model/templatekmg.model';

@Injectable({
  providedIn: 'root'
})
export class TemplatekmgVariableService {

  private template_variables: TemplateUrlKMG;

  constructor() {
    this.template_variables = {
      name: "KMG",
      logo: "logo.svg"
    } as TemplateUrlKMG;
  }

  public getName(): string{
    return this.template_variables.Name;
  }

  public getLogo(): string{
    return "assets/images/" + this.template_variables.Logo;
  }
}
