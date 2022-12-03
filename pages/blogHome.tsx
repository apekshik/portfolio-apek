import fs from 'fs' // this is a filesystem import to fetch local .md files. 
import path from 'path' // need it in the getSTaticProps() method to fetch path to posts.
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

  const files = fs.readdirSync(path.join('posts'))
  return {
    props: {
      posts: 'Somet post as a prop',
    },
  }
}