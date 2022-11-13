const Projek = ({filnn, ringan}) => {
    return (
        <>
            <div class="ps">
                <h2>Projek Saya</h2>
            </div> 
            <section id="sec1">
                <div class="scon">
                    <img src={filnn} class="plogo"></img>
                    <h5>FILNN</h5>
                    <div class="stul">
                        <p>Desain UI/UX Aplikasi Penyewaan Film secara online</p>
                    </div>
                    <button class="cek"><a href="https://www.figma.com/file/XJOIe32RupjDzlqCYtswz6/FILNN" target="_blank">Lihat Projek</a></button>
                </div>
                <div class="scon">
                    <img src={ringan} class="plogo"></img>
                    <h5>RinganTangan</h5>
                    <div class="stul">
                        <p>Desain UI/UX Aplikasi Galang Dana secara online</p>
                    </div>
                    <button class="cek"><a href="https://www.figma.com/file/JLMOoV1MdnOSbjSsm3skdp/Kelompok-Ringan-tangan?node-id=0%3A1" target="_blank">Lihat Projek</a></button>            
                </div>
                <div class='blan'></div>
            
            </section>
        </>
    )
}

export default Projek