import PontoDestaque from "./PontoDestaque";
const advantages = [
    "Carregamento rápido.",
    "SEO melhorado com Next.js 14.",
    "Design responsivo e personalizado.",
    "Segurança e estabilidade.",
    "Otimização  e desempenho.",
    "Gerenciamento de postagens."
    
  ];

export default function Qualidades() {
    return (
        <section className="dark:bg-gray-900 bg-white text-gray-900" id="Qualidades">
            <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold sm:text-4xl dark:text-slate-100">Por Que Escolher a Kenneth Web Studio?</h2>

                    {/* <p className="mt-4 text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam
        iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur
        quibusdam, quos fuga minima.
      </p> */}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    {advantages.map((advantage ) =>(
                        <PontoDestaque key={advantage} conteudo={advantage} />
                    ))}
                    
                </div>
            </div>
        </section>
    );
}