import React from "react";
import CharacterList from "./components/CharacterList";
import { Provider } from 'react-redux'
import store from './redux/store'
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CharacterList />
      </div>
    </Provider>
  );
}

export default App;
