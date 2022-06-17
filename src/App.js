import Optin from './components/optin';
import React, {useCallback, useState} from 'react';

function App() {
  const [page, selectPage] = useState("optin")
  
  const callback = useCallback((p_name) => {
    selectPage(p_name);
  }, []);
  if(page === "optin"){
    return (
      <div>
      <Optin parentCallback={callback}/>
     </div>
    );
  }
  
}

export default App;
