import { useLocation, useNavigate } from "react-router-dom";
import { useAction } from "../../hooks";

const SideBar = () => {
  const search = new URLSearchParams(window.location.pathname);
  const { fetchUsers } = useAction();
  const navigate = useNavigate();
  const location = useLocation();

  const fetchByParams = (key: string, value: string) => {
    navigate("users");
    if (value === "all") {
      search.delete(key);
    } else {
      search.set(key, value);
    }
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    fetchUsers();
  };

  return (
    <>
      {
        !location.pathname.includes('/rooms') ? 
      <div>
        <div className="main_left-box">
          <div
            className="main_left-box-content"
            onClick={() => {
              fetchByParams("staff_position", "all");
            }}>
            <p className="main_left-box-content-text">Все сотрудники</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {
              fetchByParams("staff_position", "Mentor");
            }}>
            <p className="main_left-box-content-text">Mенторы</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {
              fetchByParams("staff_position", "Tracker");
            }}>
            <p className="main_left-box-content-text">Трекеры</p>
          </div>

          <div
            className="main_left-box-content"
            onClick={() => {
              fetchByParams("staff_position", "Curator");
            }}>
            <p className="main_left-box-content-text">Кураторы</p>
          </div>
        </div>
      </div>
      :
      <div>
        <div className="main_left-box">
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/6')}}>
            <p className={location.pathname == '/rooms/6' ? "main_left-box-content active" : "main_left-box-content"}>1</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/7')}}>
            <p className={location.pathname == '/rooms/7' ? "main_left-box-content active" : "main_left-box-content"}>4</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/8')}}>
            <p className={location.pathname == '/rooms/8' ? "main_left-box-content active" : "main_left-box-content"}>9</p>
          </div>

          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/5')}}>
            <p className={location.pathname == '/rooms/5' ? "main_left-box-content active" : "main_left-box-content"}>14</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/4')}}>
            <p className={location.pathname == '/rooms/4' ? "main_left-box-content active" : "main_left-box-content"}>18</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/3')}}>
            <p className={location.pathname == '/rooms/3' ? "main_left-box-content active" : "main_left-box-content"}>19</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/2')}}>
            <p className={location.pathname == '/rooms/2' ? "main_left-box-content active" : "main_left-box-content"}>22</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/1')}}>
            <p className={location.pathname == '/rooms/1' ? "main_left-box-content active" : "main_left-box-content"}>24</p>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default SideBar;
