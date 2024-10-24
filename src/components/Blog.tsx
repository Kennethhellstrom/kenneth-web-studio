import { Key } from "react";
import BlogCard from "./BlogCard";

export default async function Blog() {
    const BASE_POST = process.env.NEXT_PUBLIC_POST_URL;
    const url = `${BASE_POST}`;

    const response = await fetch(url);
    const data = await response.json();
    
    return (
        <section className="dark:bg-black-900 bg-sky-300/15 text-white" id="Servicos">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center text-black dark:text-white">
                    <h2 className="text-3xl font-bold sm:text-4xl">Blog</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 py-6 gap-8 md:grid-cols-2 lg:grid-cols-3">
                   {
                        data.posts.map((post: { title: string; description: string; id: Key; excerpt:string; featured_image: string; slug: string; }) => (
                            <BlogCard Titulo={post.title} Resumo={post.excerpt} key={post.title} image={post.featured_image} Url={post.slug}/>
                        ))
                    } 
                </div>
            </div>
        </section>
    );

}