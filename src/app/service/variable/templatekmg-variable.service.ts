import { Injectable } from '@angular/core';
import { TemplateWebKMG, ModuloKMG, MenuKMG } from '@app/model/templatekmg.model';

@Injectable({
  providedIn: 'root'
})
export class TemplatekmgVariableService {

  private menu_variable: MenuKMG[] = [];
  private modelo_variable: ModuloKMG[] = [];
  private template_variables: TemplateWebKMG;

  constructor() {
    this.menu_variable.push(new MenuKMG("Menu Title", "google.com"));
    this.modelo_variable.push(new ModuloKMG("Modülo Títle", "modelo-img.png", this.menu_variable));
    this.modelo_variable.push(new ModuloKMG("Tiñtle 2", "modelo-img.png", this.menu_variable));
    this.template_variables = new TemplateWebKMG("KMG", "logo.svg", this.modelo_variable);
  }

  public getTitle(): string{
    return this.template_variables.title;
  }

  public getLogo(): string{
    return "assets/images/" + this.template_variables.logo;
  }

  public getModulos(): ModuloKMG[] {
    return this.template_variables.models;
  }
}
