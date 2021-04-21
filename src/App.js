import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';/* bootrap import and used */
import Header from './components/Header/Header';
import PlayersContainer from './components/PlayersContainer/PlayersContainer';

function App() {
    return (
        <div>
            <Header></Header>
            <PlayersContainer></PlayersContainer>
        </div>
    );
}

export default App;
