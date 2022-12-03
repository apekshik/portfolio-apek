import Link from "next/link"

function blogHeader() {
  return (
    <header>
      <div class="bg-slate-500 text-white p-[8px]">
        <Link href="/blogHome">
          <h2>Dev Blog</h2>
        </Link>
      </div>
    </header>
  )
}

export default blogHeader