import fs from 'fs' // this is a filesystem import to fetch local .md files. 
import path from 'path' // need it in the getSTaticProps() method to fetch path to posts.
import matter from 'gray-matter'
import Test from '../components/Test'
import BlogNavbar from '../components/blogNavbar'
import Post from '../components/Post'

// Main function to be exported
export default function Blog({ posts }: any) {
  // console.log(posts) // to check if posts has an array of values.
  return (
    <div>
      
      <img src="wallpapers/L2.jpeg" className="fixed w-full z-[-1]"></img>
      
      <BlogNavbar />

      {/* Posts */}
      <div className="flex flex-col space-y-3 p-4">
        {posts.map((post: any, index: any) => (
          <Post key={index} post={post} />
        ))}
      </div>
      
    </div>
  )
}

// getStaticProps loads local static props when the website is built for the first time. 
// Use it for any static components that your site loads during build time. 
export async function getStaticProps() {
  // Get files from post dir.
  const files: string[] = fs.readdirSync(path.join('posts'))

  // console.log(files) // to check if previous line works.

  // Get slug and frontmatter from files
  const posts = files.map(filename => {
    // Create slug
    const slug: string = filename.replace('.md', '') // basically removing the .md from the filename to get the slug.

    // Get full file contents with meta information (title, date, etc.)
    const markdownWithMeta: string = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    // console.log(markdownWithMeta) to see file contents being stored here.

    // data is 'renamed' to frontmatter. That's all that syntax below means. 
    const { data: frontmatter } = matter(markdownWithMeta)

    // This return is for the const posts. 
    return {
      slug,
      frontmatter
    }
  }) // console.log(posts) to see how the slug and frontmatter are formatted in posts array

  // This return statement is for the getStaticProps() method.
  return {
    props: {
      posts: posts,
    },
  }
}