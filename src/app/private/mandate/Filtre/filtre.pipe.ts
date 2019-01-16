import { Pipe, PipeTransform } from '@angular/core';
import {Mandate} from '../../Models/Mandate';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(value: any[], mot:string): any {
    if(!value) return value;
    return value.filter(e => {
      if (mot === '') {
        return value;
      } else {
        return JSON.stringify(e).includes(mot);
      }

  });

}
}
