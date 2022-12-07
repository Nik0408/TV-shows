import Header from "../components/Header"
import Footer from "../components/Footer"
import Shows from "../components/Shows"


export default function Home() {
  return (
    <div className="container">
      <Header />

      <Shows />

      <Footer name="Developerview" /> 
      
    </div>
  )
}
