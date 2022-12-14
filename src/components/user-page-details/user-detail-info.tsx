import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAction } from "../../hooks";
import "./user-detail-info.css";

const UserDetailinfo = () => {
  const { fetchDetail } = useAction();
  const { handleDelete } = useAction();
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchDetail(id);
  }, [id]);

  const navigate = useNavigate();

  const deleteUser = (id: any) => {
    let sure = window.confirm('Вы действительно хотите удалить работника?!');
    return sure ? handleDelete(id) : null;
  }

  const { userDetail: user } = useAppSelector((state) => state.user);

  function getRankIcon(rank: string){
    switch (rank) {
      case 'Trainee':
        return "/images/rank_low.svg"
      case 'Ninja':
        return "/images/rank_bronze.svg"
      case 'Ronin':
        return "/images/rank_silver.svg"
      case 'Samurai':
        return "/images/rank_gold.svg"
      case 'Daimio':
        return "/images/rank_epic.svg"
      default:
        return "/images/rank_low_plus.svg"
    }
  }

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
          <button className="delete-btn" onClick={()=>deleteUser(user.id)}>delete</button>
          <button className="update-btn" onClick={()=>navigate(`/update/${user.id}`)}>update</button>
        </div>
        <div className="detail-info-paper-right-side">
          <div className="right-side-cards">
            <div className="first-block">
              Дата конца стажировки:
              <p>
                <b>{user.start_of_training}</b>
              </p>
            </div>
            <div className="first-next-block">Дата начала трекерства крекерства:
              <p>
                <b>{user.start_of_training}</b>
              </p>
            </div>
            <div className="second-block">
              Ментор?
              <p>
                <b>{user.mentor_status_day ? <>Да </> : <>Нет</>}</b>
              </p>
            </div>
            <div className="third-block">заметки:{user.notes}</div>
            <div className="third-block-skills">
              Ранг:
              <p>
                <img src={getRankIcon(user.staff_rank)} alt="rank_icon" width="180" />
              </p>
              <em><b>{user.staff_rank}</b></em>
            </div>
            <div className="second-block">Контракт до:
              <p>
                <b>{user.plans_to_leave}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailinfo;
