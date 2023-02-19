import ButtonPrimary from "@/components/common/buttons/primary/buttonprimary";
import Flex from "@/components/common/cards/flex";
import TitleSection from "@/components/common/text/titlesection";
import TitleSectionSmall from "@/components/common/text/titlesectionsmall";
import style from "./freelancer.module.scss";

// Icons
import Whatsapp from "@/components/svg/whatsapp";

const Freelancer = () => {
  return (
    <Flex className={style.flex}>
      <h2 className={style.title}>Pagina de inicio</h2>
      <Whatsapp classname={style.icon} />
      <div className={style.card}></div>
      <div className={style.card1}></div>
      <ButtonPrimary>Mi boton</ButtonPrimary>
      <TitleSection
        title="Este titulo"
        subtitle="fue cambiado"
        text="el nombre del archivo"
      />
      <TitleSectionSmall title="Titulo muy" subtitle="corto" />
    </Flex>
  );
};

export default Freelancer;
