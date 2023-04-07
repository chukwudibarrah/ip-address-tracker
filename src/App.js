import './App.css';
import PageTitle from './components/PageTitle';
import SearchBar from './components/SearchBar';
import SearchDetails from './components/SearchDetails';
import background from './components/images/pattern-bg-desktop.png'

function App() {
  return (
    <main className="App">
      <section style={{ backgroundImage: `url(${background})`}} className='bg-no-repeat bg-cover min-h-full'>
        <PageTitle/>
        <SearchBar/>
        <SearchDetails/>
      </section>
    </main>
  );
}

export default App;
