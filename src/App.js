import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import SelectPlan from './SelectPlan';

function App() {
  return (
    <div className="App">
     <Header/>
     <div>
      <div className='body'><Body/></div>
      <div className='selectPlan' style={{maxWidth:'500px'}}><SelectPlan/></div>
     </div>
     
     
    </div>
  );
}

export default App;
