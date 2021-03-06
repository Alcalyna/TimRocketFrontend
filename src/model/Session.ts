import {Time} from "@angular/common";
import {User} from "./User";
import {Coach} from "./Coach";

export interface Session {
  sessionId : string
  subject : string
  date : Date;
  time : Time;
  location: string;
  f2fLocation: string;
  remarks: string;
  coachee_id: string;
  coach_id: string;
  coach: Coach;
  coachee: User;
}
