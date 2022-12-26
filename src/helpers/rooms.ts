
export const getRoomId = (room: number) => {
  switch (room) {
    case 1:
      return 6;
    case 4:
      return 7;
    case 9:
      return 8;
    case 14:
      return 5;
    case 17:
      return 4;
    case 19:
      return 3;
    case 22:
      return 2;
    case 24:
      return 1;  
    default:
      return 10;
  }
}