import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../../model/User";
import {Coach} from "../../model/Coach";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(coaches: Coach[], searchString: string | undefined){
    if (coaches.length === 0 || searchString === '' || !searchString || searchString.length < 3) {
      return coaches;
    }

    return coaches.filter((coach) => {
      let searchFirstName: boolean = coach.user.firstName.toLowerCase().includes(searchString.toLowerCase());
      let searchLastName: boolean = coach.user.lastName.toLowerCase().includes(searchString.toLowerCase());
      let searchEmail: boolean = coach.user.email.toLowerCase().includes(searchString.toLowerCase());
      return searchFirstName || searchLastName || searchEmail;
    })
  }
}
