import styled from "styled-components";
import Notification from "../notification/Notification";

const NotificationBox: React.FC = () => {
  return (
    <>
      <MainContainer>
        <div className="header-container">
          <div className="separator-container">
            <h1>Notifications</h1>
            <div className="notification-num">3</div>
          </div>
          <button>Mark all as read</button>
        </div>
        <Notification />
      </MainContainer>
    </>
  );
};

export default NotificationBox;

const MainContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  padding: 24px 16px;

  .header-container {
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  h1 {
    font-size: 20px;
    font-weight: 800;
    margin-right: 9px;
  }

  .notification-num {
    width: 32px;
    height: 100%;
    border-radius: 6px;
    background: #0a327b;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background: none;
    border: none;
    color: #5e6778;
    font-size: 14px;
    font-weight: 500;
  }

  .separator-container {
    width: auto;
    height: 25px;
    display: flex;
  }
`;
