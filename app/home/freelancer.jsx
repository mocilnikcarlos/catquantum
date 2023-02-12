import Flex from "@/components/common/cards/flex";
import style from "./freelancer.module.scss";

const Freelancer = () => {
  return (
    <Flex className={style.flex}>
      <h2 className={style.title}>Pagina de inicio</h2>
      <div className={style.card}></div>
      <div className={style.card1}></div>
    </Flex>
  );
};

export default Freelancer;
