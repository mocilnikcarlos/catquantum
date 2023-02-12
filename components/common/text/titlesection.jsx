import Flex from "@/components/common/cards/flex";
import style from "./titles.module.scss";

const TitleSection = ({ title, subtitle, text }) => {
  return (
    <>
      <Flex className={style.containertitle}>
        <Flex className={style.boxtitles}>
          <h1 className={style.h1}>{title}</h1>
          <h2 className={style.h2}>{subtitle}</h2>
        </Flex>
        <p className={style.text}>{text}</p>
      </Flex>
    </>
  );
};

export default TitleSection;
