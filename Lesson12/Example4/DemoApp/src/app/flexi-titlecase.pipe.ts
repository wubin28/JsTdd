import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flexititlecase'
})
export class FlexiTitlecasePipe implements PipeTransform {

  transform(value: string, upperLower: string): string {

    if (upperLower !== 'upper' && upperLower !== 'lower') 
      return value;
    
    let words:string[] = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      if (upperLower === 'upper')
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      else 
        words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1).toUpperCase();
    }
    return words.join(' ');
  }
}
