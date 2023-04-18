import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './home';
import Page2 from './page2';

function App()
{
  return(
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Page2" element={<Page2/>}></Route>
      

    </Routes>
    </BrowserRouter>
  );
}
export default App;