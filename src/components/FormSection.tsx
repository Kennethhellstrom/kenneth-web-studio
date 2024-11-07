import Image from "next/image";

export default async function FormSection({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <section className="dark:bg-slate-800 " id="Form">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <h2 className="text-3xl font-bold sm:text-4xl text-center">Solicitar Orçamento</h2>
            </div>
            <div className="sm:flex">
                <div className="max-w-screen-xl mx-auto items-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    {children}
                </div>
                <div>
                    <Image
                        src="/images/forms.png"
                        width={600}
                        height={600}
                        alt="form"
                    />
                </div>
            </div>

        </section>
    );

}