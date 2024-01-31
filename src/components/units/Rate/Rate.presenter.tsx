import { Rate } from "antd";

import type { IRateProps } from "./Rate.types";

const RateUI = (props: IRateProps): JSX.Element => {
  return props.isReadOnly ? (
    <Rate disabled value={props.value} />
  ) : (
    <Rate onChange={props.setValue} value={props.value} />
  );
};

export default RateUI;
