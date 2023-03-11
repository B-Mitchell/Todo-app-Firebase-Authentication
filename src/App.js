import React from "react";
import { BrowserRouter as  Router , Routes , Route  } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from "./components/SignIn";
import { AuthContextProvider } from "./context/AuthContext";
import Todo from "./components/Todo";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      
      <Router >


        <AuthContextProvider>
          <Routes >
          <Route path="/" element={ <SignUp /> } />
          <Route path="/signIn" element={ <SignIn /> } />
          <Route path="/Account" element={<ProtectedRoute >
            <Todo />
          </ProtectedRoute>  } />
        </Routes>
        </AuthContextProvider>
        

      </Router>


    </div>
  );
}

export default App;
