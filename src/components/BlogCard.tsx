
import Image from "next/image";
import Link from "next/link";


interface blogCard {
    Resumo: string,
    Titulo: string,
    Url: string,
    image: string
}


export default function BlogCard({ Resumo, Titulo, Url, image }: blogCard) {
    return (


        <article className="card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" id="Blog">
            <Link href={Url} >
                <Image
                    alt=""
                    src={image}
                    className="h-56 w-full object-cover"
                    width={200}
                    height={200}
                />
            </Link>


            <div className="p-4 sm:p-6">
                <a href="#">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-slate-100">
                        {Titulo}
                    </h3>
                </a>

                <div className="mt-2  text-sm/relaxed text-gray-500 dark:text-slate-100" dangerouslySetInnerHTML={{ __html: Resumo }} />

                <Link href={Url} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                    Saiba mais

                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                        &rarr;
                    </span>
                </Link>
            </div>
        </article>
    );
}