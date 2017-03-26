import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform {
  transform(value: string, defaultVal: string): string {
    return (value)? value : defaultVal;
  }
}
