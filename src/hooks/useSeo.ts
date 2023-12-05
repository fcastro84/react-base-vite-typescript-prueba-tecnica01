import { useEffect } from "react";

interface Seo {
    title: string;
    description: string
}

export const useSeo = ({ title, description }: Seo) => {

    useEffect(() => {
      
        document.title = title
        document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    }, [])
    
}