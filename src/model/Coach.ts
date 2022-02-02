import {User} from "./User";
import {CoachInformation} from "./CoachInformation";
import {CoachTopic} from "./CoachTopic";

export interface Coach {
  user : User
  coachInformation : CoachInformation
  coachTopics : CoachTopic[]
}
