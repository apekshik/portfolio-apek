import Link from "next/link"

function blogNavbar() {
  return (
    <header>
      <div className="flex bg-black bg-opacity-20 justify-between mx-auto text-3xl space-x-5 text-white font-semibold p-[12px]">
        {/* empty div for centering next link. */}
        <Link href="/">
          <h2> Home </h2>
        </Link>

        <Link href="/blogHome">
          <h2>Dev Blog</h2>
        </Link>

        {/* Search bar */}
        <div className="flex bg-transparent">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-white rounded-lg text-sm p-2.5 mr-1" >
            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 bg-transparent text-sm text-white border rounded-lg focus:ring-white focus:border-white" placeholder="Search..."/>
          </div>
        </div>
      </div>
      <div className=""></div>
    </header>
  )
}

export default blogNavbar