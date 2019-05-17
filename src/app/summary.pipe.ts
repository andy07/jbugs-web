import {PipeTransform} from "@angular/core";
import {Pipe} from "@angular/core";
@Pipe(
  {name:'summary'}
)
export class SummaryPipe implements PipeTransform{
  transform(value: string, ...args: any[]): any {
    if(!value)
      return null;
    return value.substr(0,40) +' ...';
  }

}
