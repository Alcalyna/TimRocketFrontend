import { Pipe, PipeTransform } from '@angular/core';
import {Coach} from "../../model/Coach";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(coaches: Coach[] | null, filterparameter: string | undefined ) {
    if (!coaches || filterparameter == "" || !filterparameter) {
      return coaches
    }

    return coaches.filter(coach => coach.coachTopics.some(topic => topic.name.toLowerCase().includes(filterparameter.toLowerCase())))
  }
}
