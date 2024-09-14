import data from "../../data.js";
import CardFeature from "../components/CardFeature";
import CardStory from "../components/CardStory";
import Split from "../components/Split.jsx";
import Hero from "../components/Hero.jsx";

export default function HomePage() {
    return (<main>
        <Hero data={data} page="home"/>

        <section>
            <div className="wrapper zpattern" data-zpattern-first="media" data-max-wrapper="true">
                {data.split.map((item, index) => index < 3 && <Split key={`key${index}`} {...item}/>)}
            </div>
        </section>

        <section>
            <div className="wrapper" data-max-wrapper="true">
                <ul className="grid" data-columns="robust" role="list">
                    {data.stories.map((card, index) => index < 4 && <li key={`key${index}`}>
                        <CardStory {...card} btn={{...card.btn, content: "read story"}}/>
                    </li>)}
                </ul>
            </div>
        </section>

        <section className="space-fluid-10">
            <div className="wrapper">
                <ul className="[ grid flow ] [ space-fluid-8 ]" data-columns="robust" role="list">
                    {data.features.map((card, index) => index < 3 && <li key={`key${index}`}>
                        <CardFeature {...card}/>
                    </li>)}
                </ul>
            </div>
        </section>

    </main>);
}