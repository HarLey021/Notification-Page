import styled from "styled-components";

const Notification: React.FC = () => {
  return (
    <>
      <Box>
        <Avatar src="/images/avatar-mark-webber.webp" alt="Mark Webber photo" />
        <div>
          <Content>
            <Name>Mark Webber</Name>
            <Action> reacted to your recent post </Action>
            <Subject>My first tournament today!</Subject>
            <RedDot></RedDot>
          </Content>
          <Time>1m ago</Time>
        </div>
      </Box>
    </>
  );
};

export default Notification;

const Box = styled.div`
  width: 100%;
  height: auto;
  background-color: #f7fafd;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  gap: 13px;
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

const Subject = styled.span`
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
