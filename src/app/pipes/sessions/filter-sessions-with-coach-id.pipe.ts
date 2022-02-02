import { Pipe, PipeTransform } from '@angular/core';
import {Session} from "../../../model/Session";

@Pipe({
  name: 'filterSessionsWithCoachId'
})
export class FilterSessionsWithCoachIdPipe implements PipeTransform {

  transform(sessions: Session[] | null, idOfCoach: string) {
    if (!sessions) {
      return sessions;
    }
    return sessions.filter(session => session.coach.user.userId === idOfCoach);

}}
