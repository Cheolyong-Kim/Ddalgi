import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IPopUpButtonProps {
  isCancle?: boolean;
}

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const MainWrap = styled.section`
  ${flexCol};
  width: 1200px;
  padding-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 30px;
`;

export const PostHeader = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 5px;
  border-bottom: 1px solid #bbbbbb;
`;

export const Name = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

export const ProfileWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
`;

export const ProfileInfoWrap = styled.div`
  ${flexCol};
  align-items: end;
`;

export const ProfileName = styled.span`
  margin-bottom: 5px;
  font-size: 20px;
`;

export const CreatedAt = styled.span`
  font-size: 14px;
  color: #bbbbbb;
`;

export const UpdateButton = styled.a`
  margin-left: 7px;
  padding-left: 7px;
  border-left: 1px solid #404040;
  font-size: 14px;
  color: #404040;
  cursor: pointer;
`;

export const deleteButton = styled.button`
  margin-left: 7px;
  padding-left: 7px;
  border: none;
  border-left: 1px solid #404040;
  background-color: transparent;
  font-size: 14px;
  color: #404040;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 65px;
  height: 65px;
  margin-left: 10px;
`;

export const PostWrap = styled.div`
  ${flexCol};
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Contents = styled.p`
  font-size: 22px;
  margin-bottom: 80px;
`;

export const ButButtonWrap = styled.div`
  ${flexRow};
  justify-content: end;
  align-items: flex-end;
  width: 80%;
  margin-bottom: 20px;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

export const BuyButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #fe7488;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const LikeWrap = styled.div`
  ${flexCol};
  align-items: center;
  margin: 80px 0 40px 0;
`;

export const LikeImg = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const LikeNum = styled.span`
  font-size: 18px;
  color: #606060;
`;

export const PopUpWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

export const PopUpLayer = styled.div`
  position: absolute;
  top: calc(50vh - 200px);
  left: calc(50vw - 200px);
  width: 350px;
  height: 350px;
  margin: auto;
  border-radius: 10px;
  background-color: white;
  z-index: 15;
`;

export const PopUpInfoWrap = styled.div`
  position: absolute;
  top: 80px;
  left: 25px;
  ${flexCol};
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const PopUpUsedItemName = styled.span`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PopUpUsedItemPrice = styled.span`
  display: block;
  margin-bottom: 30px;
  font-size: 18px;
`;

export const PopUpWarningMessage = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: red;
`;

export const PopUpButtonWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const PopUpButton = styled.button`
  width: 50%;
  height: 40px;
  border: ${(props: IPopUpButtonProps) =>
    props.isCancle ? "1px solid #bdbdbd" : "none"};
  border-radius: ${(props) => (props.isCancle ? "0 0 0 10px" : "0 0 10px 0")};
  background-color: ${(props) => (props.isCancle ? "white" : "#fe7488")};
  font-size: 17px;
  color: ${(props) => (props.isCancle ? "#606060" : "white")};
  cursor: pointer;
`;

export const Dimed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  opacity: 0.5;
`;

export const TagWrap = styled.div`
  ${flexRow};
  justify-content: start;
  width: 80%;
`;

export const Tag = styled.p`
  font-size: 15px;
  color: #bdbdbd;
`;
