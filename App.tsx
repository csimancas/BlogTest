import React from 'react';
import Home from './src/screens/Home';
import {Provider as EntriesContext} from './src/context/entriesContext';

function App(): JSX.Element {
  return (
    <EntriesContext>
      <Home />
    </EntriesContext>
  );
}

export default App;
