---
title: 'NextJS Dynamic Routing with Firebase Issues'
date: 'Dec 5, 2022'
excerpt: 'I ran into a couple issues while deploying this blog website (made with NextJS and tailwind) with Firebase hosting. The Dynamic routes...'
cover_image: ''
---

I ran into a couple issues while deploying this blog website (made with NextJS and tailwind) with Firebase hosting. The Dynamic routes (routes in the pages directory with a 'slug' `/url/path/to/[slug].tsx`  path) fail to work and return a 404 error. This is solely a firebase configuration issue. It has to do with how NextJS and Firebase communicate with each other. But nothing that can't be resolved in a few minutes. I found the solution on this [stackoverflow page](https://stackoverflow.com/questions/69085982/nextjs-dynamic-routing-not-working-in-firebase-hosting), and it summarizes the fix as such: 

- Add `trailingSlash: true`, to your `next.config.js` file. This lets all static routing work (i.e. routes without a "slug").
- Add dynamic / "slug" routes to the rewrites section of `firebase.json`. 

You first go to `.next/routes-manifest.json` and copy the first two parameters (`pages` and `regex`) from the dynamic routes section: 

```json 
"dynamicRoutes": [  
        {
            "page": "/user/[id]", // add .html to this line as shown below.
            "regex": "^/user/([^/]+?)(?:/)?$",
            "routeKeys": {
                "id": "id"
            },
            "namedRegex": "^/user/(?<id>[^/]+?)(?:/)?$"
        }
]
```

Then paste it in your `firebase.json` file and rename `pages` to `destination`.  The rewrites section in your `firebase.json` file will then look similar to this: 

```json 
"hosting": {
	"public": "out",
	"ignore": [
	  "firebase.json",
	  "**/.*",
	  "**/node_modules/**"
	],
	"rewrites": [
	  {
		"destination": "/blog/[slug].html", // add .html to end of the value.
		"regex": "^/blog/([^/]+?)(?:/)?$"
	  }
	]
}
```

That should be enough to fix your dynamic routes. However, even if you're only having issues with dynamic routes and your static routing previously worked, you still need to do what's told in point 1 for the dynamic routes to work. The bulleted point says that's only for static routing, but I guess they're both connected, so make sure to set `trailingSlash` to `true`. 

My dynamic routes started to work after this, but my background image bugged out for my blog homepage. It wouldn't load (404 fetch error for the background). I realized it must be because of enabling trailing slashes because the image loads from a local directory. I looked up the NextJS documentation for [trailing slashes](https://nextjs.org/docs/api-reference/next.config.js/trailing-slash) and that confirmed my suspicion. So, I changed my `<img>` component's source path from `src="wallpapers/L2.jpeg"` to `src="/wallpapers/L2.jpeg"` and that fixed the bug! 

You could always update your rewrites manually by following the process above everytime you make new pages for your website, but there's a [script I found](https://gist.github.com/jeff-r-koyaltech/6195f546764443d0cc7c5efe48fbe896)  you can write to automate this process. 
