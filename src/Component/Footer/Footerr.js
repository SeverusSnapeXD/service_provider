import '../../css/footerr.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
//import AppStoreImg from "../../Resources/Icon/AppStoreImg.PNG";
//import GooglePlayImg from "../../Resources/Icon/GooglePlayImg.PNG"; 
//import Logo from "../../Resources/Icon/Logo.PNG";

const Footerr = () => {
    return(
        <footer className="foo-main">
            <div className="foo-container">
                <div className="row-foo-top">
                    <div className="col-md-6">
                        <h3 className="footer-content">
                            Download Our Application
                        </h3>
                    
                    
                        <div className="footer-button footer-content">
                            <button className="foo-btn-app"></button>
                            <button className="foo-btn-goo"></button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="foo-container">
                <div className="row gen-footer-bottom">
                    <div className="col-md-12 gf-logo-service">
                        <button className="foo-btn-logo"></button>
                        <h4 className="text-sm font-weight-bold gf-logo-txt">Service Provider</h4>
                    </div>
                    </div>
                    </div>
                    <div className="footer-middle-container">
                <div className="footer-middle-con-row">
                    <div className="footer-middle-con-col">
                        <p className="footer-col-head">MENU</p>
                        <p className="footer-col-footlink" href="#">Jobs</p>
                        <p className="footer-col-footlink" href="#">Service Providers</p>
                        <p className="footer-col-footlink" href="#">How it works?</p>
                        <p className="footer-col-footlink" href="#">About us</p>
                        <p className="footer-col-footlink" href="#">Blog</p>
                    </div>
                    <div className="footer-middle-con-col">
                        <p className="footer-col-head">MY ACCOUNT</p>
                        <p className="footer-col-footlink" href="#">Login</p>
                        <p className="footer-col-footlink" href="#">Sign Up</p>
                    </div>
                    <div className="footer-middle-con-col">
                        <p className="footer-col-head">INFO</p>
                        <p className="footer-col-footlink" href="#">Terms and Conditions</p>
                        <p className="footer-col-footlink" href="#">Prvacy Policy</p>
                        
                    </div>
                    <div className="footer-middle-con-col">
                        <p className="footer-col-head">CONTACT</p>
                        <p className="footer-col-footlink" href="#">info@afshana.lk</p>
                        <p className="footer-col-footlink" href="#">+94 777 777 777</p>
                        <p className="footer-col-footlink" href="#">+94 711 711 711</p>
                        
                        
                        <span className="footer-slm-icon">
                        <span className="foo-icons"><FacebookIcon/></span>
                        <span className="foo-icons"><InstagramIcon/></span>
                        <span className="foo-icons"><TwitterIcon/></span>
                    </span>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col py-3 pb-1">
                <div className="footer-copyright">
                    &copy;{new Date().getFullYear()} Service Provider. All rights reserved. Copyright (221-2030) - ServiceProvider.com <sup className="foo-supp">TM</sup>
                </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footerr