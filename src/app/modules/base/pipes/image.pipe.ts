import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return 'https://cdn.pixabay.com/photo/2017/11/24/10/43/admission-2974645_960_720.jpg';
    return value;
  }

}
