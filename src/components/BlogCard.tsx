
import Image from "next/image";
import Link from "next/link";


interface blogCard{
    Resumo : string,
    Titulo : string,
    Url : string,
    image : string
}


export default function BlogCard({ Resumo, Titulo, Url, image }: blogCard) {
    return (


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white dark:bg-gray-900 shadow-sm" id="Blog">
            <Image
                alt=""
                src={image}
                className="h-56 w-full object-cover"
                width={200}
                height={200}
            />

            <div className="p-4 sm:p-6">
                <a href="#">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-slate-100">
                        {Titulo}
                    </h3>
                </a>

                <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-slate-100"  dangerouslySetInnerHTML={{ __html: Resumo }} />

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