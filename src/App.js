import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import AboutPage from './pages/AboutPage'
import Base from './components/Base'
import AboutIconLink from './components/AboutIconLink'
import { NavLink } from 'react-router-dom'
import Card from './components/shared/Card'
import { FeedbackProvider } from './context/FeedbackContext'

function App(){
    return(
      <FeedbackProvider>
      <Router>
           <Header />
            <div className="container">
            <> 
              <Routes>
                <Route path='/' element={<Base/>}/>
                <Route path='/about' element={<AboutPage />} /> 
              </Routes> 
            </> 
            <Card>
              <NavLink to='/' activeClassName='active'>
                Home
              </NavLink>
              <>-_-_-</>
              <NavLink to='/about' activeClassName='active'>
                About
              </NavLink>
            </Card>
            <AboutIconLink />      
            </div> 
       </Router> 
       </FeedbackProvider>     
        
    )
}

export default App