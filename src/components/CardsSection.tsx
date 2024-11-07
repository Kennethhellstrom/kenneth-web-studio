
import Card from "./cards";


export default function CardsSection() {
    const servicesList = [
        {
            id: 1,
            title: "Desenvolvimento de Sites",
            description: "Criação de sites personalizados e responsivos, desenvolvidos com as melhores práticas de design e performance. Entregamos soluções sob medida para cada cliente, garantindo uma experiência digital moderna e funcional.",
            image: "/images/srv3.webp"
        },
        {
            id: 2,
            title: "Hospedagem Administrada",
            description: "Cuidamos de todo o processo de hospedagem do seu site, desde a configuração inicial até a gestão contínua. Com servidores rápidos e confiáveis, garantimos que seu site permaneça estável, seguro e otimizado, enquanto você foca no crescimento do seu negócio.",
            image: "/images/hospe.webp"
        },
        {
            id: 3,
            title: "Registro de Domínio",
            description: "Facilitamos o registro do seu domínio com rapidez e eficiência. Garanta o nome ideal para o seu negócio, assegurando sua presença online com segurança e proteção de marca.",
            image: "/images/registro-dominio.webp"
        },
        {
            id: 4,
            title: "E-mail Profissional",
            description: "Oferecemos a configuração de e-mails profissionais para o seu domínio, proporcionando credibilidade e confiança nas suas comunicações empresariais. Tenha contas de e-mail personalizadas que refletem a identidade da sua empresa.",
            image: "/images/email-corporativo.webp"
        },
        {
            id: 5,
            title: "Acompanhamento e Suporte Mensal",
            description: "Oferecemos um serviço contínuo de suporte, com manutenção de bugs, atualizações no site, adição de novas páginas e monitoramento do servidor para garantir o bom funcionamento do seu site ao longo do tempo.",
            image: "/images/suporte.webp"
        }
    ];
    return (
        <section className="dark:bg-slate-800  text-white" id="Servicos">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center text-black dark:text-white">
                    <h2 className="text-3xl font-bold sm:text-4xl">Nossos Serviços</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 py-6 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        servicesList.map(service => (
                            <Card titulo={service.title} descricao={service.description} key={service.id} imageUrl={service.image}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );

}