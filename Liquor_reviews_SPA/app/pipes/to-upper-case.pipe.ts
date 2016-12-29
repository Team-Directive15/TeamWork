import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'to-upper-case'
})

export class ToUpperCasePipe implements PipeTransform {
    transform(value: string): string {
        return value.toUpperCase.toString();
    }
}