import { withAuth } from "../../../src/components/commons/withAuth";
import MyProfile from "../../../src/components/units/mypage/myprofile";

const MyProfilePage = (): JSX.Element => {
  return <MyProfile />;
};

export default withAuth(MyProfilePage);
