import styled from "styled-components";
import Notification from "../notification/Notification";
import notifications from "../../data";
import type { NotificationInterface } from "../../data";
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
        <Notification
          notificationList={notificationList}
          setNotificationList={setNotificationList}
        />
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

  @media (min-width: 1080px) {
    width: 730px;
    height: 840px;
    border-radius: 15px;
    box-shadow: 0 20px 60px 0 rgba(73, 97, 168, 0.05);
    padding: 33px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (min-width: 1080px) {
    height: 30px;
    margin-bottom: 31px;
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
