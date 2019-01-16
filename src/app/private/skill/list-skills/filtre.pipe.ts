import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

    transform(value: any[], mot: string): any {
        return value.filter(data => {
                return data.nameSkill.includes(mot);
            }
        );
    }

}
