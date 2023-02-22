import Flex from "@/components/common/cards/flex";
import style from "./titles.module.scss";

const TitleSectionSmall = ({ title, subtitle }) => {
  return (
    <>
      <Flex className={style.boxtitles}>
        <h1 className={style.h1}>{title}</h1>
        <h2 className={style.h2}>{subtitle}</h2>
      </Flex>
    </>
  );
};

export default TitleSectionSmall;
