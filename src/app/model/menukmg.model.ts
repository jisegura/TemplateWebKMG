import { UrlFormatService } from '@app/service/method/url-format.service';

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

  isLeaf(): boolean{
    return this.submenu === undefined;
  }
}