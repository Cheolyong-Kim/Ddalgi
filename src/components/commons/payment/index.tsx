// https://developers.portone.io/docs/ko/sdk/javascript-sdk/readme?v=v1
// https://developers.portone.io/docs/ko/authpay/guide?v=v1

import type { Dispatch, SetStateAction } from "react";
import * as P from "./Payment.styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { useMutationCreatePointTransactionOfLoading } from "../../../commons/hooks/useMutation";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_USER_LOGGEDIN,
} from "../../../commons/queries";

declare const window: typeof globalThis & {
  IMP: any;
};

interface IPaymentProps {
  setIsPopUpOpen: Dispatch<SetStateAction<boolean>>;
}

interface IPaymentData {
  amount: string;
}

const schema = yup.object({
  amount: yup.string().required("금액을 입력해주세요."),
});

const Payment = (props: IPaymentProps): JSX.Element => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const [createPointTransactionOfLoading] =
    useMutationCreatePointTransactionOfLoading();

  const onClickPayment = (data: IPaymentData): void => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: "포인트 충전",
        amount: Number(data.amount),
      },
      async (rsp: any) => {
        if (rsp.success === true) {
          props.setIsPopUpOpen(false);

          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
              refetchQueries: [
                {
                  query: FETCH_POINT_TRANSACTIONS,
                },
                {
                  query: FETCH_USER_LOGGEDIN,
                },
              ],
            });
          } catch (error) {
            if (error instanceof Error) alert(error.message);
          }
        } else {
          props.setIsPopUpOpen(false);
          alert("결제 실패");
        }
      },
    );
  };

  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <P.MainWrap>
        <P.PopUpLayer onSubmit={handleSubmit(onClickPayment)}>
          <P.CancelButton
            type="button"
            onClick={() => props.setIsPopUpOpen(false)}
          ></P.CancelButton>
          <P.PopUpTitle>충전할 금액을 입력해주세요.</P.PopUpTitle>
          <P.PopUpInput type="text" {...register("amount")} />
          <P.ErrorBox>{formState.errors.amount?.message}</P.ErrorBox>
          <P.SubmitButton type="submit">충전하기</P.SubmitButton>
        </P.PopUpLayer>
        <P.Dimed></P.Dimed>
      </P.MainWrap>
    </>
  );
};

export default Payment;
