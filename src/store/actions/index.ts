import * as UserActionCreators from "./user";
import * as RoomActionCreators from "./room";

const obj = {
  ...UserActionCreators,
  ...RoomActionCreators,
};
export default obj;
