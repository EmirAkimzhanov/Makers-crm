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
  name: string;
  id: string;
  last_name: string;
  direction: string;
  staff_position: string;
  website: string;
}
export interface IUserSecond {
  count: number;
  next: null;
  previous: null;
  results: [];
}
