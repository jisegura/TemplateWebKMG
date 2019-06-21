import { Injectable } from '@angular/core';
import { TemplateKMG } from '@app/model/templatekmg.model';

@Injectable({
  providedIn: 'root'
})
export class TemplatekmgVariableService {

  private template_variables: TemplateKMG;

  constructor() {
    this.template_variables = {
      Name: "KMG",
      Logo: "/image/123.jpg"
    };
  }

  public getName(): string{
    return this.template_variables.Name;
  }

  public getLogo(): string{
    return this.template_variables.Logo;
  }
}
