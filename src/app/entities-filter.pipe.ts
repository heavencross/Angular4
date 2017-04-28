import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entitiesFilter'
})
export class EntitiesFilterPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    } else {
      return items.filter(item => item.leoi.indexOf(value) > -1);
   }
  }

}
