import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import usuario from '../assets/usuario.jpg';
import '../styles/Header.css'

function Header() {
    return(
        <div id="header">
            <div className="header-corner">
                <a href="https://eagle-edu.com.br/"><img src={logo} alt="Logo com a águia do Eagle-edu" className="logo"></img></a>
                <div className="dropdown-nav">
                    <input type="image" src={menu} className="dropbtn-nav" alt="Menu"/>
                    <div className="dropdown-content-nav">
                        <a href="https://eagle-edu.com.br/">Início</a>
                        <a href="https://eagle-edu.com.br/">Sobre</a>
                        <a href="https://eagle-edu.com.br/">Contato</a>
                    </div>
                </div>
            </div>
            <div class="header-corner">
                <select id="language">
                    <option value="portugues">Português</option>
                    <option value="ingles">Inglês</option>
                </select>
                <img src={usuario} alt="Foto do usuário" id="usuario"></img>
            </div>
        </div>
    )
}

export default Header;