import { BrowserRouter ,Routes,Route} from "react-router-dom";

import {Contact,Contact2,Contact3,Navbar} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <div className='relative z-0'>
          <Routes>
            <Route path="/" element={<Contact/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Contact2" element={<Contact2/>}/>
            <Route path="/Contact3" element={<Contact3/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;