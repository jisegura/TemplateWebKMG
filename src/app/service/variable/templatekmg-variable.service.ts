import { Injectable } from '@angular/core';
import { TemplateWebKMG } from '@app/model/templatekmg.model';
import { ModuloKMG } from '@app/model/modulokmg.model';
import { MenuKMG } from '@app/model/menukmg.model';

@Injectable({
  providedIn: 'root'
})
export class TemplatekmgVariableService {

  private menuTEST_variable: MenuKMG[] = [];
  private menu_variable: MenuKMG[] = [];
  private menu2_variable: MenuKMG[] = [];
  private menu3_variable: MenuKMG[] = [];
  private menu4_variable: MenuKMG[] = [];
  private menu5_variable: MenuKMG[] = [];
  private menu6_variable: MenuKMG[] = [];
  private menu7_variable: MenuKMG[] = [];
  private menu8_variable: MenuKMG[] = [];
  private menu9_variable: MenuKMG[] = [];
  private menu0_variable: MenuKMG[] = [];

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

  private menu111: MenuKMG;
  private menu112: MenuKMG;
  private menu113: MenuKMG;
  private menu114: MenuKMG;

  private menu11: MenuKMG;


  private menu121: MenuKMG;
  private menu122: MenuKMG;
  private menu123: MenuKMG;
  private menu124: MenuKMG;
  private menu125: MenuKMG;

  private menu12: MenuKMG;


  private menu131: MenuKMG;
  private menu132: MenuKMG;
  private menu133: MenuKMG;

  private menu13: MenuKMG;


  private menu141: MenuKMG;
  private menu142: MenuKMG;
  private menu143: MenuKMG;
  private menu144: MenuKMG;

  private menu14: MenuKMG;


  private menu151: MenuKMG;
  private menu152: MenuKMG;

  private menu15: MenuKMG;

  private modelo1: ModuloKMG;
  private modelo2: ModuloKMG;
  private modelo3: ModuloKMG;
  private modelo4: ModuloKMG;

  private template_variables: TemplateWebKMG;

  private menuMap: MenuKMG[];

  constructor() {

    //this.menu_variable.push(new MenuKMG("Description", "google.com"));
    //this.menu_variable.push(new MenuKMG("Scenarios", "google.com"));
    //this.menu_variable.push(new MenuKMG("Linear regression set up", "google.com"));
    //this.menu_variable.push(new MenuKMG("Product set up", "google.com"));

    //this.menu9_variable.push(new MenuKMG("Configuration", undefined, this.menu_variable));

    
    //this.menu2_variable.push(new MenuKMG("Import historical data", "google.com"));
    //this.menu2_variable.push(new MenuKMG("Missing values and outliers","google.com"));
    //this.menu2_variable.push(new MenuKMG("New product introduction (NPI)", "google.com"));
    //this.menu2_variable.push(new MenuKMG("Run prediction", "google.com"));
    //this.menu2_variable.push(new MenuKMG("Guided step by step", "google.com"));

    //this.menu8_variable.push(new MenuKMG("Data administration", undefined, this.menu2_variable));


    //this.menu3_variable.push(new MenuKMG("Review prediction outcome", "google.com"));
    //this.menu3_variable.push(new MenuKMG("Review prediction models", "google.com"));
    //this.menu3_variable.push(new MenuKMG("Guided step by step", "google.com"));

    //this.menu7_variable.push(new MenuKMG("Prediction exploration", undefined, this.menu3_variable));


    //this.menu4_variable.push(new MenuKMG("Accuracy review", "google.com"));
    //this.menu4_variable.push(new MenuKMG("Accuracy detail", "google.com"));
    //this.menu4_variable.push(new MenuKMG("Performance review", "google.com"));
    //this.menu4_variable.push(new MenuKMG("Guided step by step", "google.com"));

    //this.menu6_variable.push(new MenuKMG("Accuracy and performance review", undefined, this.menu4_variable));

    //this.menu5_variable.push(new MenuKMG("Pricing forecasting", "google.com"));
    //this.menu5_variable.push(new MenuKMG("Sales forecasting", "google.com"));

    //this.menu0_variable.push(new MenuKMG("Sales Forecasting", undefined, this.menu5_variable));

    //this.menuTEST_variable.push(new MenuKMG("Configuration", undefined, this.menu_variable));
    //this.menuTEST_variable.push(new MenuKMG("Data administration", undefined, this.menu2_variable));
    //this.menuTEST_variable.push(new MenuKMG("Prediction exploration", undefined, this.menu3_variable));
    //this.menuTEST_variable.push(new MenuKMG("Accuracy and performance review", undefined, this.menu4_variable));
    //this.menuTEST_variable.push(new MenuKMG("Sales Forecasting", undefined, this.menu5_variable));

    //this.modelo_variable.push(new ModuloKMG("Predictive Forecasting", "predictive_forecasting.png", this.menuTEST_variable, "Volume demand forecasting, data cleaning, robust predictive models, forecast accuracy, forecast dispersion, ad-hoc dashboarding."));
    //this.modelo_variable.push(new ModuloKMG("Supply Chain Optimization", "supply_chain_optimization.png", this.menu_variable, "Calculate the minimum cost for supplier orders, inventory cost, warehouse capacity optimization, reduction of the distribution cost, optimize sales mix, customer orders and sales margins."));
    //this.modelo_variable.push(new ModuloKMG("Predictive Pricing", "predictive_pricing.png", this.menu_forestal, "Calculate price elasticity, cross elasticity for competitors, optimal prices, maximization of sales portfolio."));
    //this.modelo_variable.push(new ModuloKMG("Promotion Forecast", "trade_promotion.png", this.menu2_variable, "Calculate impact and behavior of the promotions, calculation of volume forecast for new campaigns or plan of future promotions and performance of historical promotions."));
    //this.modelo_variable.push(new ModuloKMG("Administración Central", "trade_promotion.png", this.menu_variable));


    /* START: MENU 1 */
    this.menu111 = new MenuKMG();
    this.menu111.setTitle("Description");
    this.menu111.setLink("https://www.google.com/");

    this.menu112 = new MenuKMG();
    this.menu112.setTitle("Scenarios");
    this.menu112.setLink("https://www.google.com/");

    this.menu113 = new MenuKMG();
    this.menu113.setTitle("Linear regression set up");
    this.menu113.setLink("https://www.google.com/");

    this.menu114 = new MenuKMG();
    this.menu114.setTitle("Product set up");
    this.menu114.setLink("https://www.google.com/");

    this.menu11 = new MenuKMG();
    this.menu11.setTitle("Configuration");
    /* END: MENU 1 */

    /* START: MENU 2  */
    this.menu121 = new MenuKMG();
    this.menu121.setTitle("Import historical data");
    this.menu121.setLink("https://www.google.com/");

    this.menu122 = new MenuKMG();
    this.menu122.setTitle("Missing values and outliers");
    this.menu122.setLink("https://www.google.com/");

    this.menu123 = new MenuKMG();
    this.menu123.setTitle("New product introduction (NPI)");
    this.menu123.setLink("https://www.google.com/");

    this.menu124 = new MenuKMG();
    this.menu124.setTitle("Run prediction");
    this.menu124.setLink("https://www.google.com/");

    this.menu125 = new MenuKMG();
    this.menu125.setTitle("Guided step by step");
    this.menu125.setLink("https://www.google.com/");

    this.menu12 = new MenuKMG();
    this.menu12.setTitle("Data administration");
    /* END: MENU 2  */

    /* START: MENU 3  */
    this.menu131 = new MenuKMG();
    this.menu131.setTitle("Review prediction outcome");
    this.menu131.setLink("https://www.google.com/");

    this.menu132 = new MenuKMG();
    this.menu132.setTitle("Review prediction models");
    this.menu132.setLink("https://www.google.com/");

    this.menu133 = new MenuKMG();
    this.menu133.setTitle("Guided step by step");
    this.menu133.setLink("https://www.google.com/");

    this.menu13 = new MenuKMG();
    this.menu13.setTitle("Prediction exploration");
    /* END: MENU 3  */

    /* START: MENU 4  */
    this.menu141 = new MenuKMG();
    this.menu141.setTitle("Accuracy review");
    this.menu141.setLink("https://www.google.com/");

    this.menu142 = new MenuKMG();
    this.menu142.setTitle("Accuracy detail");
    this.menu142.setLink("https://www.google.com/");

    this.menu143 = new MenuKMG();
    this.menu143.setTitle("Performance review");
    this.menu143.setLink("https://www.google.com/");

    this.menu144 = new MenuKMG();
    this.menu144.setTitle("Guided step by step");
    this.menu144.setLink("https://www.google.com/");

    this.menu14 = new MenuKMG();
    this.menu14.setTitle("Accuracy and performance review");
    /* END: MENU 4  */

    /* START: MENU 5  */
    this.menu151 = new MenuKMG();
    this.menu151.setTitle("Pricing forecasting");
    this.menu151.setLink("https://www.google.com/");

    this.menu152 = new MenuKMG();
    this.menu152.setTitle("Sales forecasting");
    this.menu152.setLink("https://www.google.com/");

    this.menu15 = new MenuKMG();
    this.menu15.setTitle("Sales Forecasting");
    /* END: MENU 5  */

    this.modelo1 = new ModuloKMG();
    this.modelo1.setTitle("Predictive Forecasting");
    this.modelo1.setImage("predictive_forecasting.png");
    this.modelo1.setSubtitle("Volume demand forecasting, data cleaning, robust predictive models, forecast accuracy, forecast dispersion, ad-hoc dashboarding.");

    this.modelo2 = new ModuloKMG();
    this.modelo2.setTitle("Supply Chain Optimization");
    this.modelo2.setImage("supply_chain_optimization.png");
    this.modelo2.setSubtitle("Calculate the minimum cost for supplier orders, inventory cost, warehouse capacity optimization, reduction of the distribution cost, optimize sales mix, customer orders and sales margins.");

    this.modelo3 = new ModuloKMG();
    this.modelo3.setTitle("Predictive Pricing");
    this.modelo3.setImage("predictive_pricing.png");
    this.modelo3.setSubtitle("Calculate price elasticity, cross elasticity for competitors, optimal prices, maximization of sales portfolio.");

    this.modelo4 = new ModuloKMG();
    this.modelo4.setTitle("Promotion Forecast");
    this.modelo4.setImage("trade_promotion.png");
    this.modelo4.setSubtitle("Calculate impact and behavior of the promotions, calculation of volume forecast for new campaigns or plan of future promotions and performance of historical promotions.");


    this.template_variables = new TemplateWebKMG();
    this.template_variables.setTitle("Predictive Analytics Solution");
    this.template_variables.setLogo("logo.png");

    this.template_variables.addModulo(this.modelo1);
    this.template_variables.addModulo(this.modelo2);
    this.template_variables.addModulo(this.modelo3);
    this.template_variables.addModulo(this.modelo4);

    this.modelo1.addMenu(this.menu11);
    this.modelo1.addMenu(this.menu12);
    this.modelo1.addMenu(this.menu13);
    this.modelo1.addMenu(this.menu14);
    this.modelo1.addMenu(this.menu15);

    this.menu11.addSubMenu(this.menu111);
    this.menu11.addSubMenu(this.menu112);
    this.menu11.addSubMenu(this.menu113);
    this.menu11.addSubMenu(this.menu114);

    this.menu12.addSubMenu(this.menu121);
    this.menu12.addSubMenu(this.menu122);
    this.menu12.addSubMenu(this.menu123);
    this.menu12.addSubMenu(this.menu124);
    this.menu12.addSubMenu(this.menu125);

    this.menu13.addSubMenu(this.menu131);
    this.menu13.addSubMenu(this.menu132);
    this.menu13.addSubMenu(this.menu133);

    this.menu14.addSubMenu(this.menu141);
    this.menu14.addSubMenu(this.menu142);
    this.menu14.addSubMenu(this.menu143);
    this.menu14.addSubMenu(this.menu144);

    this.menu15.addSubMenu(this.menu151);
    this.menu15.addSubMenu(this.menu152);

    this.generateMap(this.template_variables);
    console.log(this.menuMap);
    //this.template_variables = new TemplateWebKMG("Predictive Analytics Solution", "logo.png", this.modelo_variable);
  }

  public getTitle(): string{
    return this.template_variables.title;
  }

  public getLogo(): string{
    return "assets/images/" + this.template_variables.logo;
  }

  public getModulos(): ModuloKMG[] {
    return this.template_variables.modulo;
  }

  public getMenus(id: string): MenuKMG[] {
    return this.menuMap[id].menu;
  }

  private generateMap(template: TemplateWebKMG): void{
    this.menuMap = [];
    
    template.modulo.forEach(value => {
      this.menuMap[value.getId()] = value;
      this.recursiveGenerateMap(value.menu);
    });
  }

  private recursiveGenerateMap(menu: MenuKMG[]): void {
    if (menu !== undefined) { 
      menu.forEach(value => {
        this.menuMap[value.getId()] = value;
        this.recursiveGenerateMap(value.submenu);
      });
    }
  }
}
