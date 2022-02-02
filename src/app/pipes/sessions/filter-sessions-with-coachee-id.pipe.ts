import { Pipe, PipeTransform } from '@angular/core';
import {Session} from "../../../model/Session";

@Pipe({
  name: 'filterSessionsWithCoacheeId'
})
export class FilterSessionsWithCoacheeIdPipe implements PipeTransform {

  transform(sessions: Session[] | null, idOfCoachee: string) {
    if (!sessions) {
      return sessions;
    }
    return sessions.filter(session => session.coachee_id == idOfCoachee);

  }

}
