import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import CardsSection from "@/components/CardsSection";
import FormOrcamento from "@/components/formOrcamento";
import FormSection from "@/components/FormSection";
import Qualidades from "@/components/Qualidades";
import QuemSomos from "@/components/QuemSomos";

export default function Home() {
  return (
    <>
    <Banner/>
    <QuemSomos/>
    <CardsSection/>
    <Qualidades/>
    <Blog/>
    <FormSection><FormOrcamento/></FormSection>
    </>
  );
}
