
import Image from "next/image";
import LinkedinSvg from "./LinkedinSvg";


export default function QuemSomos() {
    return (
        <section className="dark:bg-gray-900" id="QuemSomos">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                        <Image
                            alt=""
                            src="/images/quemsomos.jpg"
                            width={600}  // Ajuste a largura conforme necessário
                            height={400} // Ajuste a altura conforme necessário
                            className="object-cover w-full h-full rounded-lg" // Garante que a imagem preencha o container sem distorcer
                        />
                    </div>

                    <div className="lg:py-8 lg:order-last">
                        <h2 className="text-3xl font-bold sm:text-4xl font-sans">Quem Somos</h2>

                        <p className="mt-4 text-gray-600 text-large font-sans dark:text-slate-100">
                            Profissional formado em Análise e Desenvolvimento de Sistemas,
                            com mais de três anos de experiência no mercado.
                            Meu objetivo é criar websites modernos,
                            responsivos e otimizados para atender às necessidades
                            específicas de cada cliente. Com foco em design inovador,
                            funcionalidade e performance, busco oferecer plataformas
                            que não só impressionam visualmente, mas também impulsionam o crescimento
                            e a presença digital dos nossos parceiros. Entrego qualidade e personalização em cada projeto,
                            sempre com o compromisso de superar expectativas.
                        </p>
                        <div className="py-6 flex gap-7">
                            <LinkedinSvg />
                            {/* <FacebookSvg />
                            <InstagramSvg />
                            <YoutubeSvg /> */}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}