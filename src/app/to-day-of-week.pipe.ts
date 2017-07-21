import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDayOfWeek'
})
export class ToDayOfWeekPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value % 7){
      case 1: return "Monday";
      case 2: return "Tuesday";
      case 3: return "Wednesday";
      case 4: return "joi";
      case 5: return "Vineri";
      case 6: return "sambata";
      default: return "Sunday";
    }
  }
}
