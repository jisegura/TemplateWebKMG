import { UrlFormatService } from '@app/service/method/url-format.service';
import { ModuloKMG } from '@app/model/modulokmg.model';

export class TemplateWebKMG {

  private urlFormatService: UrlFormatService = new UrlFormatService();

  private idserie: number;
  public title: string;
  private url: string;
  public logo: string;
  public modulo: ModuloKMG[];

  constructor() {
    this.idserie = 0;
    this.modulo = [];
  }

  setTitle(title: string): void {
    this.title = title;
    this.url = this.urlFormatService.formatUrl(title);
  }

  setLogo(logo: string): void {
    this.logo = logo;
  }

  getUrl(): string{
    return this.url;
  }

  addModulo(modulo: ModuloKMG): void {
    this.idserie = this.idserie + 1;
    modulo.setId(this.idserie);
    this.modulo.push(modulo);
  }
}