import { Pipe, PipeTransform } from '@angular/core';
import {Coach} from "../../model/Coach";
import {User} from "../../model/User";

@Pipe({
  name: 'filterCurrentUser'
})
export class FilterCurrentUserPipe implements PipeTransform {

  transform(coaches: Coach[] | null, currentUser: User | undefined ) {
    if (!coaches || !currentUser) {
      return coaches
    }
    return coaches.filter(coach => coach.user.userId !== currentUser.userId)
  }
}
