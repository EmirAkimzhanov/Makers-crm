export interface IRoom {
  id: number,
  room_number: number,
  capacity: number,
  room_status_day: boolean,
  room_status_evening: boolean,
  'day_group': any[],
  'evening_group': any[],
}