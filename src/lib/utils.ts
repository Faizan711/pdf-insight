import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string){
  if(typeof window !== 'undefined'){
    return path
  }
  if(process.env.VERCEL_URL){
    return `https://${process.env.VERCEL_URL}${path}`
  }
  return `http://localhost:${process.env.PORT ?? 3000}${path}`
}

export function constructMetadata({
  title= "Pdf-insight - the Saas for documents",
  description= "Pdf-insight is an open-source software to help you chat with your PDFs.",
  image= "/thumbnail.png",
  icons= "/favicon.ico",
  noIndex= false
}:{
  title?: string,
  description?: string,
  image?: string,
  icons?:string,
  noIndex?:boolean
} = {}) : Metadata {
  return{
    title,
    description,
    openGraph: {
      title,
      description,
      images:[
        {
          url: image
        }
      ]
    },
    twitter:{
      card: "summary_large_image",
      title,
      description,
      images:[image],
      creator: "@MdFaizan711"
    },
    icons,
    metadataBase:new URL('https://pdf-insight-fa.vercel.app'),
    themeColor: "#fff",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
