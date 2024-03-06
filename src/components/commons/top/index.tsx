import styled from "@emotion/styled";

const TopButton = (): JSX.Element => {
  const TopButton = styled.button`
    position: fixed;
    right: 240px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background-color: rgba(254, 116, 136, 0.5);
    font-size: 18px;
    color: white;
    cursor: pointer;
  `;

  const onClickTopButton = (): void => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return <TopButton onClick={onClickTopButton}>TOP</TopButton>;
};

export default TopButton;
