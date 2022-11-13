import Tentang from '../../assets/tentang.png'


function About1() {

    return (
        <>
            <div class='judul'>
                <h2>Tentang Saya</h2>
            </div>
            <div class='para1'>
                <div id="cons1">
                    <p>Nama saya, <span>Muhammad Dynaudio Putra Semono</span>. Biasa di panggil <span>Dynau</span> ataupun <span>Dio</span>. Saya lahir di Kota Samarinda, Kalimantan Timur, Indonesia pada tanggal 21 Februari 2003. </p>
                    <p>Saya seorang mahasiswa di Universitas Mulawarman, Fakultas Teknik, Prodi Sistem Informasi</p><br></br>
                    <p>Harapan saya mengikuti Program Studi Independen Kampus Merdeka Skilvul #TECH4IMPACT: Front-End Web Development Batch3 agar bisa lebih</p>
                    <p>Memahami proses pengembangan dan pembuatan sebuah Website</p>
                </div>
                <div id="cons2">
                    <img src={Tentang} alt="dio" id="gambar"></img>
                </div>
            </div>
        </>
    )
    
}

export default About1