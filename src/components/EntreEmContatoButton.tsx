import Link from "next/link"

interface buttonlink {
    link: string
}


export default function EntreEmContatoButton({ link }: buttonlink) {
    return (
        <div className="mt-10 flex gap-4 text-center">
            <Link
                href="https://wa.me/5585999573608?text=Quero%20minha%20presen%C3%A7a%20digital!"
                className="inline-block rounded bg-gradient-to-r from-sky-600 to-sky-400 px-12 py-3 text-base font-medium text-white shadow hover:from-sky-700 hover:to-sky-500 focus:outline-none focus:ring active:bg-rose-500 transition-all duration-200"
            >
                Entre em contato
            </Link>
        </div>
    );


}