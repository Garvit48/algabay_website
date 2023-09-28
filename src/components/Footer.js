import '../stylesheets/Footer.css'
import logo from "../assets/images/logo.png"
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'

const Footer = () => {
    return(
        <section className='FooterWrapper'>
            <div className='LogoCont Mn'>
                <img src={logo} className='LogoImg' alt="Logo" />
                <p>Invest with AI</p>
            </div>
            <div className='AbtCont Mn'>
                <p className='Headers AbtHead'>About Us</p>
                <div className='Links AbtLinks'>
                    <a href='/AboutUs'>About Algabay</a>
                    <a href='/'>Contact Us</a>
                    <a href='/'>FAQ</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>Terms of Service</a>
                </div>
            </div>
            <div className='SerCont Mn'>
                <p className='Headers AbtHead'>Services</p>
                    <div className='Links AbtLinks'>
                        <a href='/'>Stock Market Analysis</a>
                        <a href='/'>Finance GPT</a>
                        <a href='/'>Stock Data</a>
                        <a href='/'>Market Current Affairs</a>
                        <a href='/'>Fiannce Help</a>
                    </div>
            </div>
            <div className='CntCont Mn'>
                <p className='Headers AbtHead'>Socials</p>
                <div className='SocialIcons'>
                    <a href='https://in.linkedin.com/company/algabay?trk=public_profile_topcard-current-company'><LinkedIn sx={{fontSize:35}} /></a>
                    <a href='/'><Twitter sx={{fontSize:35}}/></a>
                    <a href='https://instagram.com/algabayofficial'><Instagram sx={{fontSize:35}}/></a>
                </div>
                <p className='CpywrtText'>2023 © Algabay AI Private Limited <br /> All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer