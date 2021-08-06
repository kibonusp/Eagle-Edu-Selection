import Header from './components/Header';
import PainelControle from './components/PainelControle';
import PainelAssunto from './components/PainelAssunto';
import Rodape from './components/Rodape';
import './styles/App.css'

function App() {
  return(
    <div id="app-div">
      <Header></Header>
      <div class="paineis">
        <PainelControle></PainelControle>
        <PainelAssunto></PainelAssunto>
      </div>
    </div>
  )
}

/*
<PainelControle></PainelControle>
<PainelAssunto></PainelAssunto>
<Rodape></Rodape>
*/

export default App;