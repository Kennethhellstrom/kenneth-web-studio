
import Image from 'next/image';
import EntreEmContatoButton from './EntreEmContatoButton';

export default function Banner() {
  return (
    <section className="relative h-screen">
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/tibg.jpeg" 
        alt="Background"
        layout="fill" 
        objectFit="cover" 
        quality={100} 
        priority 
      />
    </div>
    <div
      className="absolute inset-0 bg-white/50 sm:bg-white/50 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l dark:bg-black/75 dark:sm:bg-gradient-to-r from-black/65"></div>
    <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
        <h1 className="text-4xl font-bold leading-tight  text-gray-700 tracking-tight sm:text-slate-100 sm:text-6xl dark:text-white font-sans">
          Kenneth Web Studio
        </h1>
        <h3 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-slate-100 sm:text-4xl dark:text-gray-300 font-sans">
          Fortalecendo a sua presença digital
        </h3>
        <p className="mt-6 text-lg  text-gray-600 sm:text-slate-100 sm:text-xl dark:text-gray-300 leading-relaxed font-sans">
          Transforme sua presença online com websites modernos e funcionais. Criamos soluções sob medida, desde sites institucionais a portfólios dinâmicos, oferecendo design inovador, responsividade e performance de alta qualidade. Impulsione seu negócio com uma plataforma que reflete sua marca e atrai clientes.
        </p>
        <EntreEmContatoButton link={"link"}/>
      </div>
    </div>
  </section>
  );
}
