import Topbar from '../Components/Topbar'
import Sidebar from '../Components/Sidebar'
import Rightbar from '../Components/Rightbar'
import Feed from '../Components/Feed'

import '../all css/Home.css'
function Home() {
  return (
    <>
      <Topbar/>
     <div className='homeContainer'>
     <Sidebar/>
     <Feed/>
     <Rightbar/>
     </div>
    </>
  )
}

export default Home