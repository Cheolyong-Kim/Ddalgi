import Link from "next/link";
import * as MH from "./Header.styles";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hooks/useQuery";
import { type ChangeEvent, useRef } from "react";
import { checkValidationFile } from "../../../../commons/libraries/utils";
import {
  useMutationUpdateUser,
  useMutationUploadFile,
} from "../../../../commons/hooks/useMutation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentPageState } from "../../../../commons/stores";
import { FETCH_USER_LOGGEDIN } from "../../../../commons/queries";

interface IMyPageHeaderProps {
  isMyProfile?: boolean;
}

const MyPageHeader = (props: IMyPageHeaderProps): JSX.Element => {
  const { data } = useQueryFetchUserLoggedIn();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const imageFileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutationUploadFile();
  const [updateUser] = useMutationUpdateUser();

  useEffect(() => {
    setCurrentPage(window.location.href.split("/").at(-1) ?? "");
  }, []);

  const onClickUploadImage = (): void => {
    imageFileRef.current?.click();
  };

  const onChangeImage = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];

    if(typeof file === "undefined") return;   // file이 undefined일때 발생하는 에러 방지(ts)
    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });

    try {
      await updateUser({
        variables: {
          updateUserInput: {
            picture: result.data?.uploadFile.url,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGEDIN,
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <MH.MainWrap>
      <MH.Title>마이페이지</MH.Title>
      <MH.ProfileWrap>
        <MH.ProfileNameWrap>
          <MH.ProfileName>{data?.fetchUserLoggedIn.name}</MH.ProfileName>
          <MH.Point>
            <MH.PointDeco>P</MH.PointDeco>
            {data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString()}
          </MH.Point>
        </MH.ProfileNameWrap>
        <MH.ProfileImg
          src={
            data?.fetchUserLoggedIn.picture
              ? `http://storage.googleapis.com/${data.fetchUserLoggedIn.picture}`
              : "/boards/id/profile.png"
          }
        />
        {props.isMyProfile && (
          <MH.ProfileUploadWrap>
            <MH.ProfileImgUploadButton
              onClick={onClickUploadImage}
            ></MH.ProfileImgUploadButton>
            <MH.ProfileImgInput
              type="file"
              onChange={onChangeImage}
              ref={imageFileRef}
            ></MH.ProfileImgInput>
          </MH.ProfileUploadWrap>
        )}
      </MH.ProfileWrap>
      <MH.Nav>
        <Link href="/mypage/mymarket" passHref>
          <MH.NavMenu isSelected={currentPage === "mymarket"}>
            나의장터
          </MH.NavMenu>
        </Link>
        <Link href="/mypage/mypoint" passHref>
          <MH.NavMenu isSelected={currentPage === "mypoint"}>
            마이포인트
          </MH.NavMenu>
        </Link>
        <Link href="/mypage/myprofile" passHref>
          <MH.NavMenu isSelected={currentPage === "myprofile"}>
            마이프로필
          </MH.NavMenu>
        </Link>
      </MH.Nav>
    </MH.MainWrap>
  );
};

export default MyPageHeader;
