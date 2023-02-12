import Flex from "@/components/common/cards/flex";
import style from "./textsection.module.scss";

const TextSection = ({ title, subtitle, text }) => {
  return (
    <Flex className={style.contenttitle}>
      <Flex className={style.boxtitle}>
        <h1 className={style.h1}>{title}</h1>
        <h2 className={style.h2}>{subtitle}</h2>
      </Flex>
      <p className={style.p}>{text}</p>
    </Flex>
  );
};

export default TextSection;
