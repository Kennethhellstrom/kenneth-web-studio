import Link from "next/link";
import Image from "next/image";
import EntreEmContatoButton from "./EntreEmContatoButton";

import LinkedinSvg from "./LinkedinSvg";


export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">


                <div className="mt-16 grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-32">
                    <div className="mx-auto max-w-md">

                        <Link href="/" className="text-teal-600 dark:text-teal-300">
                            <span className="sr-only">Home</span>
                            <Image
                                src="/images/logo.webp"
                                alt="Logo"
                                width={150}
                                height={100}
                                layout="fixed"
                            />
                        </Link>
                        {/* <strong className="block text-center text-xl font-bold text-gray-900 dark:text-slate-100 sm:text-3xl">
                            Cadastre seu E-mail e Receba Ofertas
                        </strong>

                        <form className="mt-6">
                            <div className="relative max-w-lg">
                                <label className="sr-only" htmlFor="email"> Email </label>

                                <input
                                    className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                                    id="email"
                                    type="email"
                                    placeholder="john@doe.com"
                                />

                                <button
                                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form> */}
                    </div>

                    <div className="grid grid-cols-1  text-center lg:grid-cols-1 lg:text-left dark:text-slate-100">
                        <div>
                            <Link href="#QuemSomos">
                                <strong className="font-medium text-gray-900 dark:text-slate-100 "> Quem Somos </strong>
                            </Link>
                        </div>

                        <div>
                            <Link href="#Servicos">
                                <strong className="font-medium text-gray-900 dark:text-slate-100 "> Serviços </strong>
                            </Link>
                        </div>
                        <div>
                            <Link href="#Qualidades">
                                <strong className="font-medium text-gray-900 dark:text-slate-100 "> Qualidades </strong>
                            </Link>
                        </div>
                        <div>
                            <Link href="#Blog">
                                <strong className="font-medium text-gray-900 dark:text-slate-100 "> Blog </strong>
                            </Link>
                        </div>
                    </div>

                    <div className="mx-auto max-w-sm lg:max-w-none">
                        <div className="flex flex-row">
                            <ul >
                                <li className="flex flex-row "><span className="font-bold">E-mail:</span><p>   kenenthhellstrom@hotmail.com</p></li>
                                <li className="flex flex-row "><span className="font-bold">Telefone e Whatsapp:</span><p>   +55 85 9 9957-3608</p></li>
                            </ul>
                        </div>


                        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                            <LinkedinSvg />
                            {/* <FacebookSvg />
                            <InstagramSvg />
                            <YoutubeSvg /> */}
                        </div>

                        <EntreEmContatoButton link={""} />
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-100 pt-8">
                    <p className="text-center text-xs/relaxed text-gray-500">
                        © Company 2024. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}