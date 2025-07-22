import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/Components/About'
import Edit from './pages/Edit'
import Blog from './pages/Blog'
import LearningUseState from './pages/Components/LearningUseState'
// import Form from './pages/Components/Form'
import Card from './pages/Components/Card'
import Singlepage from './pages/Singlepage'
import CreateBlog from './pages/Create'
// import Rest from './pages/Components/rest'


function App() {
  
  return ( //jsx Ui code is written inside return
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/create' element={<CreateBlog/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
    {/* <Route path='/rest' element={<Rest/>}/> */}
   {/* <Route path='/' element={<h1>This is index page</h1>}/> */}
    <Route path='/about' element={<About/>}/>
    <Route path='/learning-usestate' element={<LearningUseState/>}/>
    {/* <Route path='/form' element={<Form/>}/> */}
    <Route path='/card' element={<Card/>}/>
    {/* <Route path='/single' element={<Singlepage/>}/> */}
    <Route path='/single/:id' element={<Singlepage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
/*  */

export default App
