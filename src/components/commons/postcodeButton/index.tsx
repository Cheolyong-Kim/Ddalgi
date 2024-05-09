import { type Dispatch, type SetStateAction } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

interface PostCodeProps {
  setAddress: Dispatch<SetStateAction<string>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

interface PostCodeData {
  address: string;
}

const PostCode = (props: PostCodeProps): JSX.Element => {
  const handleComplete = (data: PostCodeData): void => {
    props.setAddress(data.address);
    props.setIsModalOpen(false);
  };

  return <DaumPostcodeEmbed onComplete={handleComplete} />;
};

export default PostCode;
