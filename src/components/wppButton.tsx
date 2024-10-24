import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton ()  {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Link
                href="https://wa.me/5585999573608?text=Quero%20minha%20presen%C3%A7a%20digital!" 
                target="_blank"
                className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
                <Image src="/images/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" height={50} width={50} />
            </Link>
        </div>
    );
};


