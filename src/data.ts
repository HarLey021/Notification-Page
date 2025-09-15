export interface NotificationInterface {
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

export default notifications;
