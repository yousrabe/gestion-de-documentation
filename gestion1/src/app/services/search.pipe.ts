import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, term: any): any {
    if(term==null || term==undefined)
    {
      return value
    }
    else{
      return value.filter(res=>res.nomF.toLowerCase().includes(term.toLowerCase())||res.dateM.toLowerCase().startsWith(term.toLowerCase())||
        res.modifi.toString().includes(term.toString()))
    }

  }



}
