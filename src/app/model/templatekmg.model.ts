import { UrlFormatService } from '@app/service/method/url-format.service';

export class TemplateWebKMG {

  private urlFormatService: UrlFormatService = new UrlFormatService();

  public title: string;
  private url: string;
  public logo: string;
  public models: ModuloKMG[];

  constructor(title: string, logo: string, models: ModuloKMG[]) {
    this.title = title;
    this.url = this.urlFormatService.formatUrl(this.title);
    this.logo = logo;
    this.models = models;
  }

  getUrl(): string{
    return this.url;
  }
}

export class ModuloKMG {

  private urlFormatService: UrlFormatService = new UrlFormatService();

  public title: string;
  private url: string;
  public subtitle: string;
  public image: string;
  public menu: MenuKMG[];

  constructor(title: string, image: string, menu: MenuKMG[], subtitle?: string) {
    this.title = title;
    this.url = this.urlFormatService.formatUrl(this.title);
    this.subtitle = subtitle;
    this.image = image;
    this.menu = menu;
  }

  getUrl(): string{
    return this.url;
  }
}

export class MenuKMG {

  private urlFormatService: UrlFormatService = new UrlFormatService();

  public title: string;
  private url: string;
  public link: string;
  public submenu: MenuKMG[];

  constructor(title: string, link?: string, submenu?: MenuKMG[]) {
    this.title = title;
    this.url = this.urlFormatService.formatUrl(this.title);
    this.link = link;
    this.submenu = submenu;
  }

  getUrl(): string{
    return this.url;
  }
}