import styled from "styled-components";
import Notification from "../notification/Notification";
import notifications from "../../data.json";
import { useState } from "react";

const NotificationBox: React.FC = () => {
  const [notificationList, setNotificationList] =
    useState<NotificationInterface[]>(notifications);

  const markAllAsRead = (): void => {
    const updated: NotificationInterface[] = notificationList.map((item) => ({
      ...item,
      status: "read",
    }));
    setNotificationList(updated);
  };
  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <SeparatorContainer>
            <NotificationsLogo>Notifications</NotificationsLogo>
            <NotificationsNum>
              {notificationList.filter((i) => i.status === "unread").length}
            </NotificationsNum>
          </SeparatorContainer>
          <MarkingButton onClick={markAllAsRead}>
            Mark all as read
          </MarkingButton>
        </HeaderContainer>
        <div className="sep">
          <Notification
            notificationList={notificationList}
            setNotificationList={setNotificationList}
          />
        </div>
      </MainContainer>
    </>
  );
};

export default NotificationBox;

const MainContainer = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 100dvh;
  padding: 0 16px;

  .sep {
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .sep::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 730px;
    min-height: 0;
    height: 839px;
    border-radius: 15px;
    box-shadow: 0 20px 60px 0 rgba(73, 97, 168, 0.05);
  }
`;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-top: 24px;
  background-color: #fff;
  border-bottom: 1px solid #dde7ee;

  @media (min-width: 1080px) {
    height: 70px;
    margin-bottom: 31px;
    padding-top: 33px;
  }
`;

const SeparatorContainer = styled.div`
  width: auto;
  height: 25px;
  display: flex;

  @media (min-width: 1080px) {
    height: 30px;
    display: flex;
    align-items: center;
  }
`;

const NotificationsLogo = styled.h1`
  font-size: 20px;
  font-weight: 800;
  margin-right: 9px;

  @media (min-width: 1080px) {
    font-size: 24px;
    margin-right: 11px;
  }
`;

const NotificationsNum = styled.div`
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

  @media (min-width: 1080px) {
    height: 25px;
  }
`;

const MarkingButton = styled.button`
  background: none;
  border: none;
  color: #5e6778;
  font-size: 14px;
  font-weight: 500;

  @media (min-width: 1080px) {
    font-size: 16px;
  }

  &:hover {
    color: #0a327b;
    cursor: pointer;
  }
`;
