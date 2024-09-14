import Button from "./Button.jsx";
import Image from "./Image.jsx";

export default function Cover(props) {
    function getTitle() {
        if (props.type === "hero") {
            return 'h1';
        } else {
            return 'h2';
        }
    }

    const Title = getTitle();

    return (
        <div className="[ cover ] [ stacked ] [ fg-neutral-1 bg-neutral-5 ]" data-extrinsic-sizing='true'>
            <Image utils="image-darker//below-md" {...props.image}/>
            <div className="wrapper" data-max-wrapper="true">
                <div className="[ cover__container ] [ justify-center//md justify-content-center//md align-content-center//md ]">
                    <div className="[ cover__content ] [ stack ] [ measure-4 ]">
                        {props.hero && <span className="[ pattern-line ] [ hide//md ]"
                                             data-direction="horizontal"
                                             style={{"--_length": "7rem", "--_block-start": "0"}}
                                             aria-hidden="true">
                        </span>}

                        {props.subtitle && <p className="[ title-1 ] [ text-uppercase ]">
                            {props.subtitle}
                        </p>}

                        <Title className="title-5">
                            {props.title}
                        </Title>

                        {props.author && props.datetime && <p className="[ fs-1 ] [ fg-neutral-2 ]">
                            {props.datetime && <time dateTime={props.datetime}>{props.datetime}</time>} {props.author && "by " + props.author}
                        </p>}

                        <p className={`[ ${props.hero ? "fg-neutral-3" : "fg-neutral-4"} ]`}>
                            {props.desc}
                        </p>

                        {props.btn && <Button type="link" utils="space-4 justify-self-start" {...props.btn}>
                            {props.btn.content}
                        </Button>}
                    </div>
                </div>
            </div>
        </div>
    );
}