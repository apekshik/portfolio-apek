import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

import BlogNavbar from '../../components/blogNavbar'

export default function PostPage({ frontmatter: {title, date, cover_image}, slug, content}: any) {
  return (
    <div>
      <img src="/wallpapers/L4.jpeg" className="fixed w-full z-[-1]"></img>
      <BlogNavbar />
      <Link href="/blog">
        <h1 className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Go back</h1>
      </Link>
      <div>
        
        <div className="grid place-items-center ">
          <h1 className="text-3xl">{title}</h1>
          <h2>Posted on {date}</h2> 
          <div
            className="prose prose-lg max-w-none bg-slate-100/80 w-[80vw] p-3 " 
            dangerouslySetInnerHTML={{__html: marked(content)}}
          />
        </div>
        
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  // returns an array of possible paths
  const files: string[] = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  console.log('getStaticPaths Ran')
  console.log(paths)
  
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

  // data:frontmatter simply means one of the destructured variables is data and is renamed 
  // to frontmatter.
  const {data:frontmatter, content} = matter(markdownWithMeta)
  return {
    props: {
      slug, 
      frontmatter,
      content
    },
  }
}