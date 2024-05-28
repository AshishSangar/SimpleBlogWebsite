import './Footer.css'
const Footer = () => {
    return(
        <div className='Footerdiv'>
    <footer className='footer'>
        <div id="box1" className='boxes'>
            <i className="fa-solid fa-phone">CALL</i>
            <i className="fa-solid fa-envelope">MAIL</i>
            <i className="fa-brands fa-whatsapp">WhatsApp</i>
        </div>
        <br /><br /><br />
        <div id="box2" className='boxes'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis cumque officiis, ea nisi unde consequuntur ut aliquam suscipit similique fugit ab mollitia. Ex nesciunt at, autem ratione placeat delectus officia maxime beatae doloremque quam illo, quas ad dicta qui a tempora explicabo quos labore! Dignissimos iure laborum molestias illum quidem.</div>
        <br /><br /><br />
        <div id="box3" className='boxes'>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
        </div>
    </footer>
        </div>
    )
}
export default Footer