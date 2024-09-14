import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import ScrollToTop from "./react/utilities/ScrollToTop";
import HomePage from "./react/pages/HomePage.jsx";
import StoryPage from "./react/pages/StoryPage.jsx";
import FeaturePage from "./react/pages/FeaturePage.jsx";
import PricePage from "./react/pages/PricePage.jsx";
import HeaderSite from "./react/components/HeaderSite";
import FooterSite from "./react/components/FooterSite";
import ComingSoonPage from "./react/pages/ComingSoonPage";

export default function App() {

    return (<>
        <Router>
            <ScrollToTop>
                <HeaderSite/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/stories" element={<StoryPage/>}/>
                    <Route path="/features" element={<FeaturePage/>}/>
                    <Route path="/pricing" element={<PricePage/>}/>
                    <Route path="/coming-soon" element={<ComingSoonPage/>}/>
                </Routes>
                <FooterSite/>
            </ScrollToTop>
        </Router>
    </>);
}
