import Link from "next/link"

interface buttonlink {
    link: string
}


export default function EntreEmContatoButton({ link }: buttonlink) {
    return (
        <div className="mt-10 md:flex gap-4 text-center">
            <Link
                href={link}
                className="inline-block rounded bg-gradient-to-r from-sky-600 to-sky-400 px-12 py-3 text-center font-medium text-white shadow hover:from-sky-700 hover:to-sky-500 focus:outline-none focus:ring active:bg-rose-500 transition-all duration-200"
            >
                Entre em contato
            </Link>
        </div>
    );


}