import MyPageHeader from "../header";
import TransactionsTable from "./transactions";
import * as MP from "./MyPoint.styles";
import Payment from "../../../commons/payment";
import { useState } from "react";
import TransactionsOfLoadingTable from "./transactionsOfLoading";
import TransactionsOfBuyingAndSellingTable from "./transactionsOfBuyingAndSellling";

const NAVIGATION_MENUS = [
  { name: "전체내역", component: <TransactionsTable /> },
  { name: "충전내역", component: <TransactionsOfLoadingTable /> },
  {
    name: "구매내역",
    component: <TransactionsOfBuyingAndSellingTable isBuy={true} />,
  },
  {
    name: "판매내역",
    component: <TransactionsOfBuyingAndSellingTable isBuy={false} />,
  },
];

const MyPoint = (): JSX.Element => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("전체내역");

  return (
    <MP.MainWrap>
      <MyPageHeader />
      <MP.MyMarketWrap>
        <MP.HeaderWrap>
          <MP.NavWrap>
            {NAVIGATION_MENUS.map((el, index) => (
              <MP.NavMenu
                key={index}
                onClick={() => setSelectedMenu(el.name)}
                isSelected={el.name === selectedMenu}
              >
                {el.name}
              </MP.NavMenu>
            ))}
          </MP.NavWrap>
          <MP.PointTransactionButton
            type="button"
            onClick={() => setIsPopUpOpen(true)}
          >
            포인트 충전
          </MP.PointTransactionButton>
          {isPopUpOpen ? <Payment setIsPopUpOpen={setIsPopUpOpen} /> : <></>}
        </MP.HeaderWrap>
        {NAVIGATION_MENUS.filter((el) => el.name === selectedMenu)[0].component}
      </MP.MyMarketWrap>
    </MP.MainWrap>
  );
};

export default MyPoint;
