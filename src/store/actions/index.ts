import * as UserActionCreators from "./user";
import * as RoomActionCreators from "./room";
import * as NewsActionCreators from "./news";
import * as GroupsActionCreators from "./groups";

const obj = {
  ...UserActionCreators,
  ...RoomActionCreators,
  ...NewsActionCreators,
  ...GroupsActionCreators
};
export default obj;
