import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData',
  standalone: true
})
export class SortDataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
