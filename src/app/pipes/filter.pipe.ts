import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../../model/User";
import {Coach} from "../../model/Coach";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(coaches: Coach[], filterparameter: string | undefined ) {
    if (filterparameter == "" || !filterparameter) {
      return coaches
    }

    return coaches.filter(coach => coach.coachTopics.some(topic => topic.name.toLowerCase().includes(filterparameter.toLowerCase())))
  }
}
