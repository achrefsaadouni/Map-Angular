import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreResource'
})
export class FiltreResourcePipe implements PipeTransform {

    transform(value: any[], mot: string): any {
        return value.filter(data => {
            return data.firstName.includes(mot)||data.lastName.includes(mot);
            }
        );
    }

}
