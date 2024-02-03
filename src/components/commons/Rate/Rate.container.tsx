import React from "react";

import type { IRateProps } from "./Rate.types";

import RateUI from "./Rate.presenter";

const Rate = (props: IRateProps): JSX.Element => {
  return (
    <RateUI
      isReadOnly={props.isReadOnly}
      setValue={props.setValue}
      value={props.value}
    />
  );
};

export default Rate;
