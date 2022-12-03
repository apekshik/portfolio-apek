import fs from 'fs' // this is a filesystem import to fetch local .md files. 
import path from 'path' // need it in the getSTaticProps() method to fetch path to posts.
import matter from 'gray-matter'
import Test from '../components/Test'
import BlogHeader from '../components/blogHeader'
export default function BlogHome({ posts }) {
  console.log(posts)
  return (
    <div>
      <BlogHeader />
    </div>
  )
}

// getStaticProps loads local static props when the website is built for the first time. 
// Use it for any static components that your site loads during build time. 
export async function getStaticProps() {
  // Get files from post dir.
  const files: string[] = fs.readdirSync(path.join('posts'))

  // console.log(files) to check if previous line works.

  // Get slug and frontmatter from files
  const posts = files.map(filename =>{
    // Create slug
    const slug: string = filename.replace('.md', '') // basically removing the .md from the filename to get the slug.

    // Get full file contents with meta information (title, date, etc.)
    const markdownWithMeta: string = fs.readFileSync(
      path.join('posts', filename), 
      'utf-8'
      ) 
    // console.log(markdownWithMeta) to see file contents being stored here.
    
    // data is 'renamed' to frontmatter. That's all that syntax below means. 
    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  }) // console.log(posts) to see how the slug and frontmatter are formatted in posts array

  return {
    props: {
      posts: 'Some post as a prop',
    },
  }
}