import Icon from "./Icon.jsx";

export default function CardFeature(props) {
    return (
        <div className="[ stack ] [ measure-3 text-center justify-items-center ]">
            <Icon name={props.iconName} size="4.5em"/>
            <h3 className="title-3">{props.title}</h3>
            <p className="fg-neutral-4">{props.desc}</p>
        </div>
    );
}