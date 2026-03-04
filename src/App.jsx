import { Suspense } from "react"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import MainSection from "./components/MainSection/MainSection"
import NavBar from "./components/NavBar/NavBar"


const loadTicketData = async () => {
  const res = await fetch("data.json")
  return res.json()
}
const promiseTicketData = loadTicketData()

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense fallback={<div className="text-center"><span className="loading loading-infinity loading-xl w-56 text-gray-200"></span></div>}>
        <MainSection promiseTicketData={promiseTicketData}></MainSection>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
