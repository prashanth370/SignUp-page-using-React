
// import './App.css';
// import Signin from './Components/Signin/Signin';
// import Signup from './Components/Signup/Signup';

// function App() {
//   return (
//     <div >
//       <Signup/>
//       <Signin/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';

function App() {
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between Signup and Signin

  return (
    <div>
      {isSignUp ? (
        <Signup onSwitch={() => setIsSignUp(false)} /> // Switch to Signin
      ) : (
        <Signin onSwitch={() => setIsSignUp(true)} /> // Switch to Signup
      )}
    </div>
  );
}

export default App;
