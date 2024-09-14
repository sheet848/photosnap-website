import {Link} from "react-router-dom";
import Image from "./Image";
import Button from "./Button";

export default function CardStory(props) {
    return (
        <Link to={props.btn.to} className="[ card-story ] [ stacked ] [ fg-neutral-1 bg-neutral-5 ]">
            <Image utils="image-darker" dir="stories" lazy="true" dimensions={[[512, 495], [464, 464]]} useMedia={true} {...props.image}/>
            <div className="[ card-story__content ] [ stack block ] [ align-content-end ]">
                {props.showDatetime && <time className="[ fs-1 ] [ fg-neutral-2 ]" dateTime={props.datetime}>{props.datetime}</time>}
                <h3 className="title-3">{props.title}</h3>
                <p className="[ fs-1 ] [ fg-neutral-2 ]">by {props.author}</p>
                <span className="divide" aria-hidden="true"></span>
                <Button type="link">{props.btn.content}</Button>
            </div>
        </Link>
    );
}