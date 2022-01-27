import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../../model/User";
import {Coach} from "../../model/Coach";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(coaches: Coach[], filterparameter: string | undefined) {
    return coaches.filter((coach) => {
      return coach.user.role === filterparameter;
    })
  }

  //
  // IF year sélectionne
  //       filter sur role && filter year
  // IF topic est sélectionné
  //       filter sur topic && role
  // IF topic && year
  //       tout
  // return coaches
}
