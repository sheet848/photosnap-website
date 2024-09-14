import data from "../../data.js";
import CardStory from "../components/CardStory.jsx";
import Hero from "../components/Hero.jsx";

export default function StoryPage() {
    return (
        <main>
            <Hero data={data} page="stories"/>

            <section className="[ fg-neutral-1 bg-neutral-5 ]">
                <ul className="grid" data-columns="robust" role="list">
                    {data.stories.map((card, index) => <li key={`key${index}`}>
                        <CardStory {...card} showDatetime="true" btn={{...card.btn, content: "read story"}}/>
                    </li>)}
                </ul>
            </section>
        </main>
    );
}
