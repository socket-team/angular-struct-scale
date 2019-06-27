import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'combineStation'})
export class combineStation implements PipeTransform {
  transform(station: any[]): string {
    if(station.length > 1) {
      return station.reduce(function(a,b){
        return a.name + ' ｜ ' + b.name;
       });
    } else {
      return station[0].name;
    }
  }
}