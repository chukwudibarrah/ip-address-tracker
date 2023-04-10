import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import "./App.css";
import PageTitle from "./components/PageTitle";
import SearchBar from "./components/SearchBar";
import SearchDetails from "./components/SearchDetails";
import background from "./components/images/pattern-bg-desktop.png";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className="App">
          <section
            style={{ backgroundImage: `url(${background})` }}
            className="bg-no-repeat bg-cover min-h-full"
          >
            <PageTitle />
            <SearchBar />
            <SearchDetails />
          </section>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
