import './styles/App.css'
import FooterComponent from './components/FooterComponent/FooterComponent';;
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomeView from './views/HomeView/HomeView';

function App() {
  return (
    <div>
      {/* <NavbarComponent/> */}
      <HomeView></HomeView>
      <FooterComponent/>
    </div>
  );
}

export default App;
