import { Injectable } from '@angular/core';
import { TemplateWebKMG } from '@app/model/templatekmg.model';
import { ModuloKMG } from '@app/model/modulokmg.model';
import { MenuKMG } from '@app/model/menukmg.model';

@Injectable({
  providedIn: 'root'
})
export class TemplatekmgVariableService {

  private menu_variable: MenuKMG[] = [];
  private menu2_variable: MenuKMG[] = [];
  private modelo_variable: ModuloKMG[] = [];
  private template_variables: TemplateWebKMG;

  constructor() {
    this.menu_variable.push(new MenuKMG("Menu 1", "google.com"));
    this.menu_variable.push(new MenuKMG("Menu 2", "google.com"));
    this.menu_variable.push(new MenuKMG("Menu 3", "google.com"));
    this.menu_variable.push(new MenuKMG("Menu 4", "google.com"));
    this.menu_variable.push(new MenuKMG("Menu 5", "google.com"));
    this.menu_variable.push(new MenuKMG("Menu 6", "google.com"));
    this.menu_variable.push(new MenuKMG("Menu 7", "google.com"));
    this.menu2_variable.push(new MenuKMG("Menu 1", "google.com"));
    this.menu2_variable.push(new MenuKMG("Menu 2", "google.com"));
    this.menu2_variable.push(new MenuKMG("Menu 3", "google.com"));
    this.modelo_variable.push(new ModuloKMG("Ganadería", "modelo-img.png", this.menu_variable));
    this.modelo_variable.push(new ModuloKMG("Agricultura", "modelo-img.png", this.menu_variable));
    this.modelo_variable.push(new ModuloKMG("Forestación", "modelo-img.png", this.menu_variable));
    this.modelo_variable.push(new ModuloKMG("Apicultura", "modelo-img.png", this.menu2_variable));
    this.modelo_variable.push(new ModuloKMG("Administración Central", "modelo-img.png", this.menu_variable));
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
