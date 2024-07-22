import Header from "../../components/header.jsx"
import MainView from "./mainView.jsx"
import './App.css'

function App() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <>
      <Header />
      <MainView/>
    </>
  )
}

export default App
