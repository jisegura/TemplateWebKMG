import { UrlFormatService } from '@app/service/method/url-format.service';
import { MenuKMG } from '@app/model/menukmg.model';

export class ModuloKMG {

  private urlFormatService: UrlFormatService = new UrlFormatService();

  private idserie: number;
  public id: number;
  public title: string;
  private url: string;
  public subtitle: string;
  public image: string;
  public menu: MenuKMG[];
  public resolution: number;

  constructor() {
    this.idserie = 0;
    this.subtitle = undefined;
    this.menu = [];
  }

  setId(id: number): void {
    this.id = id;
  }

  setTitle(title: string): void {
    this.title = title;
    this.url = this.urlFormatService.formatUrl(title);
  }

  setSubtitle(subtitle: string): void {
    this.subtitle = subtitle;
  }

  setImage(image: string): void {
    this.image = image;
  }

  addMenu(menu: MenuKMG): void {
    this.idserie = (this.idserie + 1);
    menu.setId((this.id * 100) + this.idserie);
    this.menu.push(menu);
  }

  getUrl(): string{
    return this.url;
  }

  getId(): string{
    return this.id.toString();
  }

  hasComments(): boolean {
    return this.subtitle !== undefined;
  }

  getImage(): string{
    return "assets/images/" + this.image;
  }
}