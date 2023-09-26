import { useEffect } from "react";
export default function useChangePageTitle(pageTitle){
  useEffect(()=>{
    document.title = `Alexandru Flicter - ${pageTitle}`
  },[pageTitle])
}