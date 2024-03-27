import NoticeNew from "../../../../src/components/units/notice/new/index";
import { useQueryDoc } from "../../../../src/commons/hooks/useFirebase";
import { useRouter } from "next/router";

const NoticeUpdatePage = (): JSX.Element => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return <></>;

  const { data } = useQueryDoc("Notice", router.query.id);

  return <NoticeNew data={data} isEdit={true} />;
};

export default NoticeUpdatePage;
