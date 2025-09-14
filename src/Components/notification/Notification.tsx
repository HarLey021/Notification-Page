import styled from "styled-components";

interface NotificationInterface {
  id: number;
  avatar: string;
  fullName: string;
  action: string;
  status: string;
  event?: string;
  content?: string;
  picture?: string;
  time: string;
}

const notifications: NotificationInterface[] = [
  {
    id: 1,
    avatar: "/images/avatar-mark-webber.webp",
    fullName: "Mark Webber",
    action: "reacted to your recent post",
    status: "unread",
    event: "My first tournament today!",
    time: "1m ago",
  },
  {
    id: 2,
    avatar: "/images/avatar-angela-gray.webp",
    fullName: "Angela Gray",
    action: "followed you",
    status: "unread",
    time: "5m ago",
  },
  {
    id: 3,
    avatar: "/images/avatar-jacob-thompson.webp",
    fullName: "Jacob Thompson",
    action: "has joined your group",
    status: "unread",
    event: "Chess Club",
    time: "1 day ago",
  },
  {
    id: 4,
    avatar: "/images/avatar-rizky-hasanuddin.webp",
    fullName: "Rizky Hasanuddin",
    action: "sent you a private message",
    status: "unread",
    content:
      "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    time: "5 days ago",
  },
  {
    id: 5,
    avatar: "/images/avatar-kimberly-smith.webp",
    fullName: "Kimberly Smith",
    action: "commented on your picture",
    status: "unread",
    time: "1 week ago",
    picture: "/images/image-chess.webp",
  },
  {
    id: 6,
    avatar: "/images/avatar-nathan-peterson.webp",
    fullName: "Nathan Peterson",
    action: "reacted to your recent post",
    status: "unread",
    event: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
  },
  {
    id: 7,
    avatar: "/images/avatar-anna-kim.webp",
    fullName: "Anna Kim",
    action: "left the group",
    status: "unread",
    event: "Chess Club",
    time: "2 weeks ago",
  },
];

const markAllAsRead = (): void => {
  notifications.forEach((item) => {
    item.status = "read";
  });
};

const Notification: React.FC = () => {
  return (
    <>
      {notifications.map((item: NotificationInterface) => (
        <Box
          key={item.id}
          style={{
            backgroundColor: item.status === "unread" ? "#f7fafd" : "none",
          }}
        >
          <Avatar src={item.avatar} alt={`${item.fullName} photo`} />
          <div>
            <Content>
              <Name>{item.fullName}</Name>
              <Action> {item.action}</Action>
              <Event
                style={{
                  color: item.event === "Chess Club" ? "#0A327B" : "#5e6778",
                }}
              >
                {item.event}
              </Event>
              <RedDot></RedDot>
            </Content>
            <Time>{item.time}</Time>
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

const Box = styled.div`
  width: 100%;
  height: auto;
  /* background-color: #f7fafd; */
  border-radius: 8px;
  padding: 16px;
  display: flex;
  gap: 13px;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 39px;
  height: 39px;
`;

const Content = styled.p`
  margin-bottom: 3px;
`;

const Name = styled.span`
  color: #1c202b;
  font-size: 14px;
  font-weight: 800;
  margin-right: 4px;
`;

const Action = styled.span`
  color: #5e6778;
  font-size: 14px;
  font-weight: 500;
  margin-right: 4px;
`;

const Event = styled.span`
  color: #5e6778;
  font-size: 14px;
  font-weight: 800;
  margin-right: 4px;
`;

const RedDot = styled.span`
  display: inline-block;
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
`;

const Picture = styled.img`
  width: 39px;
  height: 39px;
  border-radius: 7px;
`;
