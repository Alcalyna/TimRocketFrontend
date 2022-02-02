import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterWithId'
})
export class FilterWithIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
