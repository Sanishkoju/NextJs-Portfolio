import fs from "fs"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import matter from "gray-matter"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import {notFound} from "next/navigation"
import Image from "next/image"
import "../styles/style.css"
import Blog from "@/app/components/Blog"


export default async function Page({ params }) {

    // const blog = {
    //     title: "Typescript tutorial in hindi",
    //     author: "John Doe",
    //     description: "This is a sample blog post description.",
    //     date: "2024-09-02",
    //     content: "<p>This is the content of the blog post. It can include <strong>HTML</strong> tags and other elements.</p>"
    // };

    const filepath = `content/${params.slug}.md`

    if(!fs.existsSync(filepath)){ 
      notFound() 
      return 
  } 

    const fileContent = fs.readFileSync(filepath, "utf-8")
    const {content, data} = matter(fileContent)

    const proccesser =await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, {title: '👋🌍'})
    .use(rehypeFormat)
    .use(rehypeStringify)

const htmlContent =(await proccesser.process(content)).toString()


 


    return (
        <main className="flex min-h-screen flex-col bg-[#121212] container px-4 pt-12 m-auto md:px-12 ">
      <Navbar />
        <div className="max-w-6xl mx-auto py-16">
            <h1 className="text-4xl font-bold mb-8 text-white">{data.title}</h1>
            <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic text-white">&quot;{data.description}&quot;</p>
            <div className="flex gap-2">
                <p className="text-sm text-white mb-4 italic">By {data.author}</p>
                <p className="text-sm text-white mb-4">{data.date}</p>
            </div>
            <figure>
                <Image width={1000} height={1000} src={data.image} className="w-full h-[400px] object-cover object-center overflow-hidden mt-4 mb-5"/>
            </figure>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert text-white"></div>

        </div>
        <div className="text-center mt-6 mb-6">
            <Blog />
        </div>
        <Footer />
        </main>
    )
}