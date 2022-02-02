import { Pipe, PipeTransform } from '@angular/core';
import {Coach} from "../../model/Coach";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(coaches: Coach[] | null, listOfTopics: string | undefined ) {
    if (!coaches || listOfTopics == "" || !listOfTopics) {
      return coaches
    }
    return coaches.filter(coach => coach.coachTopics.some(topic => topic.name.toLowerCase().includes(listOfTopics.toLowerCase())))
  }
}
