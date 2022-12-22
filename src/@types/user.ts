export interface IUser {
  email: string;
  id: number;
  name: string;
  phone: string;
  surname: string;
  website: string;
  results?: [];
}
export interface IUserDetail {
  user:{};
  name: string;
  id: string;
  last_name: string;
  direction: string;
  staff_position: string;
  website: string;
  end_of_training:string;
  start_of_training:string;
  mentor_status_day:boolean;
  mentor_status_evening:boolean;
  notes:string;
  plans_to_leave:string;
  staff_rank:string;
  tracker_experience:string;
}
export interface IUserSecond {
  count: number;
  next: null;
  previous: null;
  results: [];
}

