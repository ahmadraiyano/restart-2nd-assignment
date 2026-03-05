import { Suspense, useState } from "react"
import { ToastContainer } from 'react-toastify';
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

  const [countProgress, setCountProgress] = useState(0)
  const [countResolved, setCountResolved] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Banner countProgress={countProgress} countResolved={countResolved}></Banner>
      <Suspense fallback={<div className="text-center"><span className="loading loading-infinity loading-xl w-56 text-gray-200"></span></div>}>
        <MainSection promiseTicketData={promiseTicketData} setCountProgress={setCountProgress} countProgress={countProgress} setCountResolved={setCountResolved} countResolved={countResolved}></MainSection>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
