import {Link} from 'react-router-dom'
import { useState } from "react"
import Main from '../../assets/main.png'


function Home() {
    const [name, setName] = useState('Dynaudio Putra')
    return (
    <main>
        <div id="con1">
            <img src={Main} alt="main" id="gambar"></img>
        </div>
        <div id="con2">
            <p id="atas">Hai, Namaku.</p>
            <h2 id="nama">{name}</h2>
            <p class="tulisan">Saya mahasiswa Universitas Mulawarman</p>
            <p class="tulisan">dan mengikuti program Kampus Merdeka</p>
            <p class="tulisan">Mitra Skilvul di Semester 5.</p>
            <Link to='/tentang'><button id="tombol">Tentang Saya -></button></Link>
            
        </div>

    </main>
    )
}

export default Home