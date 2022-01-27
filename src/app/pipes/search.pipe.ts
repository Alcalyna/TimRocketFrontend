import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../../model/User";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: User[], searchString: string | undefined){
    if (users.length === 0 || searchString === '' || !searchString || searchString.length < 3) {
      return users;
    }

    return users.filter((user) => {
      let searchFirstName: boolean = user.firstName.toLowerCase().includes(searchString.toLowerCase());
      let searchLastName: boolean = user.lastName.toLowerCase().includes(searchString.toLowerCase());
      let searchEmail: boolean = user.email.toLowerCase().includes(searchString.toLowerCase());
      return searchFirstName || searchLastName || searchEmail;
    })
  }

}
