import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import Button from "./Button.jsx";
import Logo from "./Logo.jsx";

export default function HeaderSite() {
    const [navOpen, setNavOpen] = useState(false);

    function handleToggleNav() {
        setNavOpen(!navOpen);
    }

    function handleOutsideClick(e) {
        if (e.target === e.currentTarget) {
            setNavOpen(false);
        }
    }

    return (<header className="[ header-site ] [ fg-neutral-5 bg-neutral-1 ]">
        <div className="[ header-site__container ] [ wrapper ] [ space-2 direction-row justify-content-between align-items-center ]">
            <Link to="/" aria-label="homepage" onClick={() => setNavOpen(false)}><Logo/></Link>
            <Button onClick={handleToggleNav} type="hamburger" icon={{name: navOpen ? "close" : "hamburger"}}
                    attributes={{"aria-controls": "navigation-primary", "aria-expanded": navOpen, "aria-label": "menu"}}/>
            <nav id="navigation-primary" aria-label="navigation primary" data-open={navOpen} onClick={e => handleOutsideClick(e)}>
                <ul className="[ flow ] [ space-3 bg-neutral-1 text-center align-items-center//md direction-row//md ]" role="list">
                    <li className="[ title-2 ] [ text-uppercase ]"><NavLink exact="true" to="/stories" onClick={handleToggleNav}>stories</NavLink></li>
                    <li className="[ title-2 ] [ text-uppercase ]"><NavLink exact="true" to="/features" onClick={handleToggleNav}>features</NavLink></li >
                    <li className="[ title-2 ] [ text-uppercase ]"><NavLink exact="true" to="/pricing" onClick={handleToggleNav}>pricing</NavLink></li>
                    <span className="[ divide ] [ hide//md ]" aria-hidden="true"></span>
                    <li className="hide//md"><Button to="/coming-soon" onClick={handleToggleNav}>get an invite</Button></li>
                </ul>
            </nav>
            <Button to="/coming-soon" utils="hide//below-md">get an invite</Button>
        </div>
    </header>);
};
