import {Link} from 'react-router-dom'
import { IconName } from "react-icons/fa";
import mlogo from '../../assets/LOGO.png'

function Nav() {
    return (
        <div class="nav-wrap">
            <input id="check-1" type="checkbox"></input>
            <nav>
                <div class="left-nav">
                    <div class="logo">
                        <img src={mlogo} alt='logo' id='ilogo'/>
                    </div>
                </div>
                <div class="right-nav">
                    <ul>
                        <li><Link to='/'>Beranda</Link></li>
                        <li><Link to='/tentang'>Tentang Saya</Link></li>
                        <li><Link to='/projek'>Projek</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                    <label for="check-1">
                        <div>
                            <i class="fa-solid fa-bars" ></i>
                        </div>
                    </label>
                </div>
            </nav>
            <div class="container">
                <ul>
                    <li><Link to='/'>Beranda</Link></li>
                    <li><Link to='/tentang'>Tentang Saya</Link></li>
                    <li><Link to='/projek'>Projek</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
        </div>
    )

}

export default Nav