import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import DashBoard from './components/DashBoard';
import SignIn from './components/SignIn';
import Validator from './components/Validator';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* <Route index element={<DashBoard />} /> */}
          <Route path='' element={<SignIn />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/validator' element={<Validator />} />
          
        </Route>
      </Routes>
    </Router>
    
  );
};

export default App;
