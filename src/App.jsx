import './App.css'
import Home from './components/home';
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Liquidity from './components/Liquidity';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function Layout({ children }) {
  return (
    <div className="flex w-full h-screen bg-gray-900">
      {/* Main content on the left */}
      <div className="flex-1 py-4">
        <Header />
        <div className="mt-12 px-6">{children}</div>
      </div>
      
      {/* Sidebar on the right */}
      <Sidebar />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout>
              <Home />
            </Layout>
          } 
        />
        <Route 
          path="/liquidity" 
          element={
            <Layout>
              <Liquidity />
            </Layout>
          } 
        />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;