import styled from "styled-components";

const Notification: React.FC<{
  notificationList: NotificationInterface[];
  setNotificationList: React.Dispatch<
    React.SetStateAction<NotificationInterface[]>
  >;
}> = ({ notificationList, setNotificationList }) => {
  const handleOpening = (id: number): void => {
    const updated = notificationList.map((item) =>
      item.id === id ? { ...item, status: "read" } : item
    );
    setNotificationList(updated);
  };

  return (
    <>
      {notificationList.map((item: NotificationInterface) => (
        <Box
          key={item.id}
          unread={item.status === "unread"}
          onClick={() => handleOpening(item.id)}
        >
          <Avatar src={item.avatar} alt={`${item.fullName} photo`} />
          <div>
            <div>
              <Content>
                <Name>{item.fullName}</Name>
                <Action> {item.action}</Action>
                <Event isChess={item.event === "Chess Club"}>
                  {item.event}
                </Event>
                <RedDot isOpened={item.status === "read"}></RedDot>
              </Content>
              <Time>{item.time}</Time>
            </div>
            {item.content && item.status === "read" ? (
              <Message>{item.content}</Message>
            ) : (
              ""
            )}
          </div>
          {item.picture ? (
            <Picture src="/images/image-chess.webp"></Picture>
          ) : (
            ""
          )}
        </Box>
      ))}
    </>
  );
};

export default Notification;

const Box = styled.div<{ unread?: boolean }>`
  width: 100%;
  height: auto;
  background-color: ${(props) => (props.unread ? "#F7FAFD" : "transparent")};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  gap: 13px;
  margin-bottom: 10px;

  @media (min-width: 1080px) {
    padding: 18px 20px;
  }
`;

const Avatar = styled.img`
  width: 39px;
  height: 39px;

  @media (min-width: 1080px) {
    width: 45px;
    height: 45px;
  }
`;

const Content = styled.p`
  margin-bottom: 3px;
`;

const Name = styled.span`
  color: #1c202b;
  font-size: 14px;
  font-weight: 800;
  margin-right: 4px;

  @media (min-width: 1080px) {
    font-size: 16px;
  }

  &:hover {
    color: #0a327b;
    cursor: pointer;
  }
`;

const Action = styled.span`
  color: #5e6778;
  font-size: 14px;
  font-weight: 500;
  margin-right: 4px;

  @media (min-width: 1080px) {
    font-size: 16px;
  }
`;

const Event = styled.span<{ isChess?: boolean }>`
  color: ${(props) => (props.isChess ? "#0A327B" : "#5e6778")};
  font-size: 14px;
  font-weight: 800;
  margin-right: 4px;

  @media (min-width: 1080px) {
    font-size: 16px;
  }

  &:hover {
    color: #0a327b;
    cursor: pointer;
  }
`;

const RedDot = styled.span<{ isOpened?: boolean }>`
  display: ${(props) => (props.isOpened ? "none" : "inline-block")};
  width: 8px;
  height: 8px;
  background-color: #f65552;
  border-radius: 8px;
  vertical-align: middle;
`;

const Time = styled.h6`
  color: #939cad;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 12px;

  @media (min-width: 1080px) {
    font-size: 16px;
  }
`;

const Picture = styled.img`
  width: 39px;
  height: 39px;
  border-radius: 7px;
  margin-left: auto;

  @media (min-width: 1080px) {
    width: 45px;
    height: 45px;
    display: flex;
    align-self: flex-start;
  }
`;

const Message = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #dde7ee;
  color: #5e6778;
  font-size: 14px;
  font-weight: 500;
  padding: 16px;

  @media (min-width: 1080px) {
    font-size: 16px;
    padding: 20px;
  }

  &:hover {
    background: #e5effa;
  }
`;
