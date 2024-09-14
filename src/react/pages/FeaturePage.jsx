import data from "../../data.js";
import CardFeature from "../components/CardFeature.jsx";
import Hero from "../components/Hero.jsx";
import Cta from "../components/Cta.jsx";

export default function FeaturePage() {
    return (<main>
        <Hero data={data} page="features"/>

        <section className="space-fluid-10">
            <div className="wrapper">
                <ul className="[ grid flow ] [ space-fluid-8 ]" data-columns="robust" role="list">
                    {data.features.map((card, index) => <li key={`key${index}`}>
                        <CardFeature title={card.title} iconName={card.iconName} desc={card.desc}/>
                    </li>)}
                </ul>
            </div>
        </section>
        <Cta/>
    </main>);
}
