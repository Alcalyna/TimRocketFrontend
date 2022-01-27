import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../../model/User";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], filterparameter: string | undefined) {
    return users.filter((user) => {
      return user.role === filterparameter;
    })
  }

  //
  // IF year sélectionne
  //       filter sur role && filter year
  // IF topic est sélectionné
  //       filter sur topic && role
  // IF topic && year
  //       tout
  // return filter juste sur role
}
