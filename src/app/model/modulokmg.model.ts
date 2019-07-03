import { UrlFormatService } from '@app/service/method/url-format.service';
import { MenuKMG } from '@app/model/menukmg.model';

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