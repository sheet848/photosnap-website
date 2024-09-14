import {Link, NavLink} from "react-router-dom";
import Button from "./Button.jsx";
import Logo from "./Logo.jsx";

export default function FooterSite() {

    return (<footer className="[ footer-site ] [ space-7 fg-neutral-1 bg-neutral-5 ]">
        <div className="[ footer-site__container ] [ columns wrapper flow ] [ space-4 justify-items-center align-items-start justify-items-start//md text-center//below-md ]">
            <Link to="/" aria-label="homepage" className="justify-content-center">
                <Logo/>
            </Link>
            <nav id="navigation-footer" className="navigation-footer">
                <ul aria-label="navigation footer" role="list" className="[ flow ] [ direction-row//md direction-column//lg ]">
                    <li className="[ title-1 ] [ text-uppercase ]"><NavLink exact="true" to="/">home</NavLink></li>
                    <li className="[ title-1 ] [ text-uppercase ]"><NavLink exact="true" to="/stories">stories</NavLink></li>
                    <li className="[ title-1 ] [ text-uppercase ]"><NavLink exact="true" to="/features">features</NavLink></li>
                    <li className="[ title-1 ] [ text-uppercase ]"><NavLink exact="true" to="/pricing">pricing</NavLink></li>
                </ul>
            </nav>
            <nav id="navigation-socials" aria-label="navigation socials" className="navigation-socials">
                <ul role="list" className="direction-row justify-content-center">
                    <li><Button href="https://martinkamir.com/" type="icon" icon={{name: "mkk", size: "1.5em"}} attributes={{"aria-label": "author's website"}}/></li>
                    <li><Button href="https://github.com/Martin-K-Kamir/" type="icon" icon={{name: "github", size: "1.35em"}} attributes={{"aria-label": "github"}}/></li>
                    <li><Button href="https://www.linkedin.com/in/martin-kam%C3%ADr-2967aa222/" type="icon" icon={{name: "linkedin", size: "1.35em"}} attributes={{"aria-label": "linkedin"}}/></li>
                    <li><Button href="https://www.facebook.com/" type="icon" icon={{name: "facebook", size: "1.35em"}} attributes={{"aria-label": "facebook"}}/></li>
                    <li><Button href="https://www.instagram.com//" type="icon" icon={{name: "instagram", size: "1.35em"}} attributes={{"aria-label": "instagram"}}/></li>
                </ul>
            </nav>
            <Button to="/coming-soon" type="link" utils="justify-content-center justify-self-end//md">Get an invite</Button>
            <p className="[ copyright ] [ fs-1 fg-neutral-3 justify-self-end//md text-end//md ]">Challenge by Frontend Mentor. Coded by Martin Kamír.<br/>Copyright 2023. All Rights Reserved</p>
        </div>
    </footer>);
};
