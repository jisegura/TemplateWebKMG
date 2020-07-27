import { UrlFormatService } from '@app/service/method/url-format.service';

export class MenuKMG {

  private urlFormatService: UrlFormatService = new UrlFormatService();

  private idserie: number;
  public id: number;
  public title: string;
  private url: string;
  public link: string;
  public submenu: MenuKMG[];

  constructor() {
    this.idserie = 0;
    this.link = undefined;
    this.submenu = [];
  }

  setId(id: number): void {
    this.id = id;
  }

  setTitle(title: string): void {
    this.title = title;
    this.url = this.urlFormatService.formatUrl(title);
  }

  setLink(link: string): void {
    this.link = link;
  }

  addSubMenu(submenu: MenuKMG): void {
    this.idserie = this.idserie + 1;
    submenu.setId((this.id * 100) + this.idserie);
    this.submenu.push(submenu);
  }

  getUrl(): string{
    return this.url;
  }

  getId(): string{
    return this.id.toString();
  }

  isLeaf(): boolean{
    return this.submenu === undefined;
  }

  getSubmenu(): MenuKMG[]{
    return this.submenu;
  }
}