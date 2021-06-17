import React, {useState} from 'react';
import {UserContext, ThemeContext } from './contexts';
import { THEME_VALUES } from './constants/constants';
import PageHeader from './components/PageHeader'


function App() {
 const authUserState = useState({
    name: 'Test',
    surname: 'Testovich',
 });

 const themeState = useState(THEME_VALUES.LIGHT);

  return (
      <>
      <ThemeContext.Provider value={themeState}>
     <UserContext.Provider value={authUserState}>
     <PageHeader />
      </UserContext.Provider>
        </ThemeContext.Provider>
          </>
  );
}
  export default App;

