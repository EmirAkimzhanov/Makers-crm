import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAction } from "../../hooks";
import "./user-detail-info.css";

const UserDetailinfo = () => {
  const { fetchDetail } = useAction();
  const { id } = useParams();

  useEffect(() => {
    fetchDetail(id!);
  }, [id]);

  const { userDetail: user } = useAppSelector((state) => state.user);

  return (
    <div className="user-detail-block">
      <div className="detail-info-paper">
        <div className="detail-info-paper-left-side">
          <p className="left-side-text">{user.name}</p>
          <p className="left-side-text">{user.surname}</p>
          <p className="left-side-text-details">{user.status}</p>
          <p className="left-side-text-details">{user.language}</p>
        </div>
        <div className="detail-info-paper-right-side">
          <div className="right-side-profile"></div>
          <p className="right-side-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            repudiandae perspiciatis autem omnis error! Ab?
          </p>
          <div className="right-side-cards">
            <div className="card">
              <div className="card-inside">
                <p className="card-header">Mentor</p>
              </div>
              <p>JS25</p>
            </div>
            <div className="card">
              <div className="card-inside">
                <p className="card-header">Tracker</p>
              </div>
              <p>JS27</p>
            </div>
            <div className="card">
              <div className="card-inside">
                <p className="card-header">Rofler</p>
              </div>
              <p>office</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailinfo;
