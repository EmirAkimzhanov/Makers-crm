import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAction } from "../../hooks";
import "./user-detail-info.css";
import axios from 'axios'

const UserDetailinfo = () => {
  const { fetchDetail } = useAction();
  const { handleDelete } = useAction();
  const { userDetail: userDetail } = useAppSelector((state) => state.user);
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchDetail(id);
  }, [id]);

  const navigate = useNavigate();


  const { userDetail: user } = useAppSelector((state) => state.user);

  console.log(user);

 

  return (
    <div className="user-detail-block">
      <div className="detail-info-paper">
        <div className="detail-info-paper-left-side">
          <div className="right-side-profile"></div>
          <p className="left-side-text">
            {user.name} {user.last_name}
          </p>
          <p className="left-side-text-details">Язык: <strong>{user.direction}</strong></p>
          <p className="left-side-text-details">Статус: <strong>{user.staff_position}</strong></p>
          <button className="delete-btn" onClick={()=>handleDelete(user.id)}>delete</button>
          <button className="update-btn" onClick={()=>navigate(`/update/${user.id}`)}>update</button>
        </div>
        <div className="detail-info-paper-right-side">
          <div className="right-side-cards">
            <div className="first-block">Информация о стажировке</div>
            <div className="first-next-block">Информация о трекерстве</div>
            <div className="second-block">Информация о менторстве</div>
            <div className="third-block">Заметки</div>
            <div className="third-block-skills">
              Навыки
              <div className="container">
                <div className="skills html"></div>
              </div>
              <div className="container">
                <div className="skills html"></div>
              </div>
              <div className="container">
                <div className="skills html"></div>
              </div>
            </div>
            <div className="second-block">Детали контракта</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailinfo;
