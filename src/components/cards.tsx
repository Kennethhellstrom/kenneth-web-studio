import Image from "next/image";

interface CardProps {
    titulo: string;
    descricao: string;
    imageUrl: string;
}

export default function Card({ titulo, descricao, imageUrl }: CardProps) {
    return (
        <div className="card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <figure className="overflow-hidden rounded-t-lg">
                <Image
                    src={imageUrl}
                    alt={titulo}
                    width={400}  // Largura fixa da imagem
                    height={250} // Altura padrão da imagem
                    className="object-cover w-full h-64" // Mantém a proporção, com altura fixa
                />
            </figure>
            <div className="card-body p-6">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {titulo}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    {descricao}
                </p>
            </div>
        </div>

    );
}
