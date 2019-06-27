import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'delTailMoneyJP'})
export class delTailMoneyJPPiPe implements PipeTransform {
  transform(value: string): string {
    return value.replace(' 円',"");
  }
}