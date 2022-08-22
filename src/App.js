import './App.css';
import ArticleList from './Components/ArticleList';
import Explore from './Components/Explore';
import HeaderBar from './Components/HeaderBar';
import MenuDisplay from './Components/MenuDisplay';
import UserDropdown from './Components/UserDropdown';

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <UserDropdown/>
      <MenuDisplay/>
      <div className='pageContainer'>
        {/* Routing here */}
        <ArticleList/>
      </div>
      <Explore/>
    </div>
  );
}

export default App;