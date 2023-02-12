import Flex from "@/components/common/cards/flex";
import TextSection from "@/components/common/text/textsection";
import style from "./freelancer.module.scss";

const Freelancer = () => {
  return (
    <Flex className={style.flex}>
      <h2 className={style.title}>Pagina de inicio</h2>
      <div className={style.card}></div>
      <div className={style.card1}></div>
      <TextSection
        title="hola mundo"
        subtitle="este es un"
        text=" componente texto de seccion"
      />
    </Flex>
  );
};

export default Freelancer;
