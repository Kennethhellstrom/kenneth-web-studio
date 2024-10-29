
import Image from 'next/image';
import EntreEmContatoButton from './EntreEmContatoButton';
import { literata } from '@/app/fonts/font';

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
    <div className={`absolute inset-0  bg-white/50 sm:bg-white/50 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l dark:bg-black/75 dark:sm:bg-gradient-to-r from-black/65`}></div>
    <div className={`relative mx-auto max-w-screen-xl px-4 py-8 sm:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ${literata.className}`}>
      <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
        <h1 className="text-4xl font-bold leading-tight  tracking-tight text-sky-400 sm:text-6xl  ">
          Kenneth Web Studio
        </h1>
        <h3 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-slate-100 sm:text-4xl dark:text-gray-300 ">
          Fortalecendo a sua presença digital
        </h3>
        <p className="mt-6 text-lg  text-gray-900 sm:text-slate-100 sm:text-xl dark:text-gray-300 leading-relaxed ">
          Transforme sua presença online com websites modernos e funcionais. Criamos soluções sob medida, desde sites institucionais a portfólios dinâmicos, oferecendo design inovador, responsividade e performance de alta qualidade. Impulsione seu negócio com uma plataforma que reflete sua marca e atrai clientes.
        </p>
        <EntreEmContatoButton link={"link"}/>
      </div>
    </div>
  </section>
  );
}
