import { MetadataRoute,Metadata} from "next";
export default function sitemap():MetadataRoute.Sitemap{
    return [
    {url:`${process.env.baseURL}`},
    {url:`${process.env.baseURL}/Bhendogu/Services`},
    {url:`${process.env.baseURL}/Bhendogu/About`},
    {url:`${process.env.baseURL}/Bhendogu/getAquote`},
    {url:`${process.env.baseURL}/Bhendogu/Projects`},
    {url:`${process.env.baseURL}/Bhendogu/Gallery`},
]
}
