function Post({ post }: any) {
  return (
    <a href={`/blog/${post.slug}`} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {post.frontmatter.title}
      </h5>
      <p className="font-normal text-gray-700">
        {post.frontmatter.excerpt}
      </p>
    </a>
  )
}

export default Post