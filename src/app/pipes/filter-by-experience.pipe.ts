import { Pipe, PipeTransform } from '@angular/core';
import {Coach} from "../../model/Coach";

@Pipe({
  name: 'filterByExperience'
})
export class FilterByExperiencePipe implements PipeTransform {

  transform(coaches: Coach[] | null, listOfExperienceLevel: string[]) {
    if (!coaches || listOfExperienceLevel.length == 0 || listOfExperienceLevel.indexOf("All Selected") !== -1) {
      return coaches
    }
    return coaches.filter(coach => coach.coachTopics.some(topic => listOfExperienceLevel.indexOf(topic.experience) !== -1))
  }
}
