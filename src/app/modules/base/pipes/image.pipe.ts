import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let size = args || '760/430';
    return `http://via.placeholder.com/${size}`;
  }

}
