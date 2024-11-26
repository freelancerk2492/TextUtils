import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import { BrowserRouter as Router,
  Route,
  Link,
  Routes
 } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert]=useState(null);

 const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
 }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      showAlert('Successfully enabled dark mode', 'success')
      document.title="TextUtils | Dark Mode"
     
    }
    else{
      setMode('light')
      showAlert('Successfully enabled light mode', 'warning')
      document.title="TextUtils | Light Mode"
     
    }
  }


  
  return (
    <Router>
        
        
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
              <Route path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert}/>}>
              </Route>
              <Route path="/about" element={ <About/>}>
               
              </Route>
          </Routes>            
        </div>
      
    </Router>
  );
}




export default App;
