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
  private menu3_variable: MenuKMG[] = [];

  private menu_forestal: MenuKMG[] = [];

  private menu_forestal_setup: MenuKMG[] = [];
  private menu_forestal_labores_e_insumos: MenuKMG[] = [];
  private menu_forestal_vivero: MenuKMG[] = [];
  private menu_forestal_ventas: MenuKMG[] = [];

  private menu_forestal_ventas_porc_de_distribucion: MenuKMG[] = [];
  private menu_forestal_ventas_precios: MenuKMG[] = [];
  private menu_forestal_ventas_ventas: MenuKMG[] = [];

  private menu_forestal_resumen: MenuKMG[] = [];

  private modelo_variable: ModuloKMG[] = [];
  private template_variables: TemplateWebKMG;

  constructor() {
    // FORESTAL
    this.menu_forestal.push(new MenuKMG("Setup", undefined, this.menu_forestal_setup));
    this.menu_forestal.push(new MenuKMG("Ejecución de Procesos", "google.com"));
    this.menu_forestal.push(new MenuKMG("Carga de Datos de Estructura", "google.com"));
    this.menu_forestal.push(new MenuKMG("Labores e Insumos", undefined, this.menu_forestal_labores_e_insumos));
    this.menu_forestal.push(new MenuKMG("Vivero", undefined, this.menu_forestal_vivero));
    this.menu_forestal.push(new MenuKMG("Ventas", undefined, this.menu_forestal_ventas));
    this.menu_forestal.push(new MenuKMG("Resumenes", undefined, this.menu_forestal_resumen));

    // Setup
    this.menu_forestal_setup.push(new MenuKMG("Labores", "google.com"));
    this.menu_forestal_setup.push(new MenuKMG("Insumos", "google.com"));
    this.menu_forestal_setup.push(new MenuKMG("Insumos por Labor", "google.com"));
    this.menu_forestal_setup.push(new MenuKMG("Hectáreas a Sembrar", "google.com"));

    // Labores e Insumos
    this.menu_forestal_labores_e_insumos.push(new MenuKMG("Cargar Labores", "google.com"));
    this.menu_forestal_labores_e_insumos.push(new MenuKMG("Cargar Distribución de Labores", "google.com"));
    this.menu_forestal_labores_e_insumos.push(new MenuKMG("Cargar Insumos", "google.com"));
    this.menu_forestal_labores_e_insumos.push(new MenuKMG("Cargar Distribución de Insumos", "google.com"));

    // Vivero
    this.menu_forestal_vivero.push(new MenuKMG("Cargar PxQ", "google.com"));
    this.menu_forestal_vivero.push(new MenuKMG("Cargar Vivero", "google.com"));

    // Ventas
    this.menu_forestal_ventas.push(new MenuKMG("Cargar Base Ventas", "google.com"));
    this.menu_forestal_ventas.push(new MenuKMG("Cargar Toneladas", "google.com"));
    this.menu_forestal_ventas.push(new MenuKMG("Cargar Toneladas", undefined, this.menu_forestal_ventas_porc_de_distribucion));
    this.menu_forestal_ventas.push(new MenuKMG("Cargar Toneladas", undefined, this.menu_forestal_ventas_precios));
    this.menu_forestal_ventas.push(new MenuKMG("Cargar Toneladas", undefined, this.menu_forestal_ventas_ventas));

    this.menu_forestal_ventas_porc_de_distribucion.push(new MenuKMG("Distribución de Clientes", "google.com"));
    this.menu_forestal_ventas_porc_de_distribucion.push(new MenuKMG("Distribución de Precios (Producto, Flete, Cosecha)", "google.com"));
    this.menu_forestal_ventas_porc_de_distribucion.push(new MenuKMG("Distribución de Ventas Mensual", "google.com"));

    this.menu_forestal_ventas_precios.push(new MenuKMG("Precios de Cosecha", "google.com"));
    this.menu_forestal_ventas_precios.push(new MenuKMG("Precios de Flete", "google.com"));
    this.menu_forestal_ventas_precios.push(new MenuKMG("Precios de Productos", "google.com"));

    this.menu_forestal_ventas_ventas.push(new MenuKMG("Cosecha", "google.com"));
    this.menu_forestal_ventas_ventas.push(new MenuKMG("Facturación", "google.com"));
    this.menu_forestal_ventas_ventas.push(new MenuKMG("Flete", "google.com"));

    // Resumen
    this.menu_forestal_resumen.push(new MenuKMG("Resumen de Ventas", "google.com"));
    this.menu_forestal_resumen.push(new MenuKMG("Resumen Forestal", "google.com"));


    this.menu_variable.push(new MenuKMG("Menu 1", "google.com"));
    this.menu_variable.push(new MenuKMG("Menu 2", "google.com"));
    this.menu_variable.push(new MenuKMG("Menu 3", undefined, this.menu3_variable));
    this.menu_variable.push(new MenuKMG("Menu 4", "google.com"));
    this.menu_variable.push(new MenuKMG("Menu 5", "google.com"));
    this.menu_variable.push(new MenuKMG("Menu 6", "google.com"));
    this.menu_variable.push(new MenuKMG("Menu 7", "google.com"));
    
    this.menu2_variable.push(new MenuKMG("Menu Apicola-1", "google.com"));
    this.menu2_variable.push(new MenuKMG("Menu con Hijo", undefined, this.menu_variable))
    this.menu2_variable.push(new MenuKMG("Menu 2", "google.com"));
    this.menu2_variable.push(new MenuKMG("Menu 3", "google.com"));

    this.menu3_variable.push(new MenuKMG("Menu Nivel 3", "google.com"));
    this.menu3_variable.push(new MenuKMG("Menu Nivel 3.1", "google.com"));
    this.menu3_variable.push(new MenuKMG("Menu Nivel 3.2", "google.com"));
    this.menu3_variable.push(new MenuKMG("Menu Nivel 3.3", "google.com"));
      
    this.modelo_variable.push(new ModuloKMG("Ganadería", "modelo-img.png", this.menu_variable));
    this.modelo_variable.push(new ModuloKMG("Agricultura", "modelo-img.png", this.menu_variable));
    this.modelo_variable.push(new ModuloKMG("Forestación", "modelo-img.png", this.menu_forestal));
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

  public getMenus(url: string): MenuKMG[] {
    let salida: MenuKMG[];
    this.modelo_variable.forEach(value => {
      if (value.getUrl() == url) {
        salida = value.menu;
      }
    });
    return salida;
  }
}
