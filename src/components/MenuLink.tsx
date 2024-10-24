import Link from "next/link";

interface MenuLink {
    url: string,
    name: string
}


export default function MenuLink({ url, name }: MenuLink) {
    return (
        <li>
            <Link href={url} className="text-darkText transition hover:text-primary dark:text-lightText dark:hover:text-teal-300" >
                {name}
            </Link>
        </li>
    );

}