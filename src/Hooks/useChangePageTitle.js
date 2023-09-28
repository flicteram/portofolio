import { useEffect } from "react";
import ReactGA from "react-ga4"
import { useLocation } from "react-router-dom";
export default function useChangePageTitle(pageTitle){
  const {pathname} = useLocation()
  useEffect(()=>{
    document.title = `Alexandru Flicter - ${pageTitle}`
    console.log(document.title)
    ReactGA.send({hitType: "pageview", page: pathname, title: document.title})
  },[pageTitle, pathname])
}