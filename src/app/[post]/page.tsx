import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import { PageProps } from "../../../.next/types/app/page";
interface PostContentProps {
    params: {
        post: string; // Slug vindo da URL
    };
}

export default async function Page({ params }: PageProps) {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const resolvedParams = await params;
    const url = `${BASE_URL}${resolvedParams.post}`;

    const response = await fetch(url);
    const data = await response.json();

    return (
        <section className="bg-sky-300/30">
            <div className="p-4 md:p-8 mx-auto flex flex-col md:flex-row ">
                {/* Container para a imagem */}
                <div className="flex-shrink-0 md:w-1/2">
                    <Image
                        alt="Post Image"
                        src={data.featured_image}
                        width={600} // Ajuste a largura conforme necessário
                        height={200} // Ajuste a altura conforme necessário
                        className="rounded-lg mb-6 shadow-lg transition-transform duration-300 transform hover:scale-105"
                        priority // Adiciona prioridade no carregamento da imagem
                    />
                </div>

                {/* Conteúdo do post */}
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    {/* Título do post */}
                    <h1 className="text-5xl font-bold dark:text-white">{data.title}</h1>
                    <div
                        className="prose dark:prose-dark"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                    />

                    {/* Informações do autor */}
                    <div className="flex items-center gap-4 mt-6">
                        <Avatar
                            src="/images/avatar.webp" 
                            alt="Kenneth Hellstrom"
                            size="lg" 
                            className="rounded-full"
                        />
                        <div>
                            <h2 className="text-xl font-semibold dark:text-white">Kenneth Hellstrom</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Desenvolvedor Web</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(data.date).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
