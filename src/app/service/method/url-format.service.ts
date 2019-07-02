import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlFormatService {

  constructor() { }

  // posible alternativa:
  // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
  public formatUrl(url: string): string {
    return url.toLowerCase()                    // to lower case
              .replace(/\s/g, "-");             // remplaza espacio por un guion medio
  }
}
