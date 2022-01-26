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

}
