import Header from "../../components/header"
import MainView from "./mainView"
import { useEffect} from "react"
export default function Bio(){
    useEffect(()=>window.scrollTo({ top: 0, behavior: 'smooth' }),[])
    

    return (
    <>
    <Header />
    <MainView />
    </>
    )
}