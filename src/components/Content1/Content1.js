import { Link } from "react-router-dom";

function Content1() {

    return (
        <>
            <div id="skill">
                <h2>My Personal Skill</h2>
            </div>
    
            <section>
                <div class="scon">
                    <i class="fa-solid fa-pen"></i>
                    <h5>Design</h5>
                    <div class="stul">
                        <p>Saya mahir membuat desain dan menggunakan tools-tools untuk desain</p>
                    </div>
                    
                    

                </div>
                <div class="scon">
                    <i class="fa-solid fa-book"></i>
                    <h5>English Subject</h5>
                    <div class="stul">
                        <p>Saya mahir berbicara, membaca dan menghafal bahasa inggris</p>
                    </div>
                    
                    
                </div>
                <div class="scon">
                    <i class="fa-brands fa-python"></i>
                    <h5>Python</h5>
                    <div class="stul">
                        <p>Saya mahir menggunakan bahasa pemrograman Python</p>
                        
                    </div>
                    
                    
                </div> 
            </section>
            <div id="more">
                <Link to='/tentang'><button id="pencet"><a href="about.html">Read More</a></button></Link>
                
            </div>
        </>
    )
}

export default Content1