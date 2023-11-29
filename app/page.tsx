import Image from 'next/image'
import NavigationBar from './component/navbar/page'
import Footer from './component/footer/page'
import HomePage from './component/homepage/page'

export default function Home() {
  return (
    <main>
      
      <NavigationBar/>
      <HomePage/>
      <Footer/>
      

      
    </main>
  )
}
