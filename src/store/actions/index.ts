import * as UserActionCreators from "./user";
import * as RoomActionCreators from "./room";
import * as NewsActionCreators from "./news";

const obj = {
  ...UserActionCreators,
  ...RoomActionCreators,
  ...NewsActionCreators,
};
export default obj;
