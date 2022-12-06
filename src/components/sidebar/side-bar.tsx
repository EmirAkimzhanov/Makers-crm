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
            onClick={() => {navigate('/rooms/1')}}>
            <p className={location.pathname == '/rooms/1' ? "main_left-box-content active" : "main_left-box-content"}>1</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/4')}}>
            <p className={location.pathname == '/rooms/4' ? "main_left-box-content active" : "main_left-box-content"}>4</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/9')}}>
            <p className={location.pathname == '/rooms/9' ? "main_left-box-content active" : "main_left-box-content"}>9</p>
          </div>

          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/14')}}>
            <p className={location.pathname == '/rooms/14' ? "main_left-box-content active" : "main_left-box-content"}>14</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/18')}}>
            <p className={location.pathname == '/rooms/18' ? "main_left-box-content active" : "main_left-box-content"}>18</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/19')}}>
            <p className={location.pathname == '/rooms/19' ? "main_left-box-content active" : "main_left-box-content"}>19</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/22')}}>
            <p className={location.pathname == '/rooms/22' ? "main_left-box-content active" : "main_left-box-content"}>22</p>
          </div>
          <div
            className="main_left-box-content"
            onClick={() => {navigate('/rooms/24')}}>
            <p className={location.pathname == '/rooms/24' ? "main_left-box-content active" : "main_left-box-content"}>24</p>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default SideBar;
