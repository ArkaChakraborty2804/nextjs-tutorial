import { Metadata } from "next"

type Props = {
    params:{
        productId: string
    }
}

export const generateMetaData = async ({params}: Props): Promise<Metadata> =>{
    const title = await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`iPhone ${params.productId}`)
        },100)
    })
    return {
        title: `Product ${title}`
    }
}

export default function ProductDetails({params}:{
    params: {productId:string}
}){
    return <h2>Details about product {params.productId}</h2>
}