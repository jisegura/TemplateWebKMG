import { UrlFormatService } from '@app/service/method/url-format.service';
import { ModuloKMG } from '@app/model/modulokmg.model';

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