import "react-quill/dist/quill.snow.css";
import KaKaoMap from "../../../commons/kakaoMap";
import { UploadImageForm } from "../../../commons/uploadImage";
import * as MN from "./MarketNew.styles";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import {
  useMutationCreateUseditem,
  useMutationUpdateUseditem,
} from "../../../../commons/hooks/useMutation";
import { useRouter } from "next/router";
import type {
  IMarketNewData,
  IMarketNewProps,
  IMarketUpdateInput,
  IUseditemAddressInput,
} from "./MarketNew.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./MarketNew.validation";
import PostCode from "../../../commons/postcodeButton";
import { Modal } from "antd";
import { FETCH_USEDITEMS } from "../../../../commons/queries";
import * as _ from "lodash";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async() => await import("react-quill"), {ssr: false});  // ReactQuill을 document가 정의 된 후에 사용하도록 dynamic import 사용

const MarketNew = (props: IMarketNewProps): JSX.Element => {
  const { register, formState, handleSubmit, setValue, trigger, getValues } =
    useForm({
      resolver: props.isEdit ? undefined : yupResolver(schema),
      mode: "onSubmit",
    });
  const [images, setImages] = useState<string[]>([]);
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createUseditem] = useMutationCreateUseditem();
  const [updateUseditem] = useMutationUpdateUseditem();
  const { onClickMoveToPage } = useMoveToPage();

  const router = useRouter();

  useEffect(() => {
    setAddress(props.data?.fetchUseditem.useditemAddress?.address ?? "");
    setValue("contents", props.data?.fetchUseditem.contents ?? "");
  }, [
    props.data?.fetchUseditem.useditemAddress?.address,
    props.data?.fetchUseditem.contents,
  ]);

  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const handleModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  const onClickSubmit = async (data: IMarketNewData): Promise<void> => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags.split(","),
            useditemAddress: {
              address,
              addressDetail: data.addressDetail,
            },
            images,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
            variables: {
              isSoldout: false,
            },
          },
        ],
      });

      void router.push(`/markets/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async (data: IMarketNewData): Promise<void> => {
    const updateUseditemInput: IMarketUpdateInput = {};
    const useditemAddress: IUseditemAddressInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.price) updateUseditemInput.price = Number(data.price);
    if (data.tags) updateUseditemInput.tags = data.tags.split(",");
    if (images.length !== 0) updateUseditemInput.images = images;
    if (address) useditemAddress.address = address;
    if (data.addressDetail) useditemAddress.addressDetail = data.addressDetail;
    if (!_.isEmpty(useditemAddress))
      updateUseditemInput.useditemAddress = useditemAddress;

    try {
      await props.client?.clearStore();
      if (typeof router.query.id !== "string") return;
      await updateUseditem({
        variables: {
          updateUseditemInput,
          useditemId: router.query.id,
        },
      });

      void router.push(`/markets/${router.query.id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <MN.MainWrap>
      <form
        onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickSubmit)}
      >
        <div>
          <MN.BasicInput
            type="text"
            placeholder="상품명을 작성해주세요."
            defaultValue={props.data?.fetchUseditem.name}
            {...register("name")}
          />
          <MN.ErrorMessage>{formState.errors.name?.message}</MN.ErrorMessage>
        </div>
        <div>
          <ReactQuill
            style={{ height: "480px", marginBottom: "45px" }}
            onChange={onChangeContents}
            value={getValues("contents")}
          />
          <MN.ErrorMessage>
            {formState.errors.contents?.message}
          </MN.ErrorMessage>
        </div>
        <MN.RemarkPriceWrap>
          <MN.RemarkPriceInputWrap width={"70%"}>
            <MN.BasicInput
              type="text"
              placeholder="한줄평을 입력해주세요."
              defaultValue={props.data?.fetchUseditem.remarks}
              {...register("remarks")}
            />
            <MN.ErrorMessage>
              {formState.errors.remarks?.message}
            </MN.ErrorMessage>
          </MN.RemarkPriceInputWrap>
          <MN.RemarkPriceInputWrap width={"25%"}>
            <MN.BasicInput
              type="text"
              placeholder="가격을 입력해주세요."
              defaultValue={props.data?.fetchUseditem.price ?? ""}
              {...register("price")}
            />
            <MN.ErrorMessage>{formState.errors.price?.message}</MN.ErrorMessage>
          </MN.RemarkPriceInputWrap>
        </MN.RemarkPriceWrap>
        <MN.KakaoMapWrap>
          <KaKaoMap address={address} />
          <MN.AddressWrap>
            <MN.AddressButton type="button" onClick={handleModal}>
              주소검색
            </MN.AddressButton>
            {isModalOpen && (
              <Modal
                open={isModalOpen}
                onOk={handleModal}
                onCancel={handleModal}
              >
                <PostCode
                  setAddress={setAddress}
                  setIsModalOpen={setIsModalOpen}
                />
              </Modal>
            )}
            <MN.BasicInput
              type="text"
              placeholder="거래하고 싶은 장소의 주소를 검색해주세요."
              value={address}
              style={{ marginBottom: "20px" }}
            />
            <MN.BasicInput
              type="text"
              placeholder="상세 주소를 입력해주세요."
              defaultValue={
                props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
              }
              {...register("addressDetail")}
            />
          </MN.AddressWrap>
        </MN.KakaoMapWrap>
        <UploadImageForm
          prevImages={props.data?.fetchUseditem.images}
          images={images}
          setImages={setImages}
        />
        <div>
          <MN.BasicInput
            type="text"
            placeholder="태그를 입력해주세요. (#태그1,#태그2,#태그3, ...)"
            style={{ marginBottom: "3px" }}
            defaultValue={props.data?.fetchUseditem.tags ?? ""}
            {...register("tags")}
          />
          <MN.ErrorMessage>{formState.errors.tags?.message}</MN.ErrorMessage>
        </div>
        <MN.ButtonWrap>
          <MN.CancleBtn type="button" onClick={onClickMoveToPage("/markets")}>
            취소
          </MN.CancleBtn>
          <MN.SubmitBtn type="submit">
            {props.isEdit ? "수정" : "등록"}
          </MN.SubmitBtn>
        </MN.ButtonWrap>
      </form>
    </MN.MainWrap>
  );
};

export default MarketNew;
