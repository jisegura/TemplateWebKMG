export class TemplateUrlKMG {

  public name: string;
  public logo: string;
  public models: ModeloKMG[];
	
  constructor(name: string, logo: string, models: ModeloKMG[]) {
    this.name = name;
    this.logo = logo;
    this.models = models;
  }
}

export class ModeloKMG {

	public title: string;
	public subtitle: string;
	public image: string;
	
	constructor(title: string, image: string, subtitle?: string) {
		this.title = title;
		this.subtitle = subtitle;
		this.image = image;
	}
}