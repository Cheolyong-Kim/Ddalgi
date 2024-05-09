import Link from "next/link";
import type { IUseditem } from "../../../commons/types/generated/types";
import * as U from "./UsedItem.styles";

interface UsedItemProps {
  el: IUseditem;
}

const UsedItem = (props: UsedItemProps): JSX.Element => {
  return (
    <U.MainWrap>
      <Link href={`/markets/${props.el._id}`} passHref>
        <U.ItemLink>
          <U.ItemImg
            src={
              props.el.images?.[0]
                ? `https://storage.googleapis.com/${props.el.images[0]}`
                : "/markets/임시이미지.png"
            }
          />
          <U.ItemWrap>
            <U.InfoWrap>
              <U.Name>{props.el.name}</U.Name>
              <U.Remarks>{props.el.remarks}</U.Remarks>
              <U.Price>{props.el.price?.toLocaleString()}원</U.Price>
            </U.InfoWrap>
            <U.PickedCountWrap>
              <U.PickedCountImg src="/boards/id/like.png" />
              <U.PickedCount>{props.el.pickedCount}</U.PickedCount>
            </U.PickedCountWrap>
          </U.ItemWrap>
        </U.ItemLink>
      </Link>
    </U.MainWrap>
  );
};

export default UsedItem;
