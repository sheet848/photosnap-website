import {Link} from "react-router-dom";
import Icon from "./Icon.jsx";

export default function Button(props) {

    function getTag() {
        if (props.href) {
            return 'a';
        } else if (props.to) {
            return Link;
        } else {
            return 'button';
        }
    }

    const Tag = getTag()

    function getTypeIcon() {
        if (!props.type) return;

        if (props.type === "hamburger") return "hamburger";
        if (props.type === "link") return "arrow";
    }

    function handleClick() {
        if (!props.onClick) return

        props.onClick();
    }


    return (
        <Tag href={props.href}
             to={props.to}
             className={props.utils ? `[ btn ] [ ${props.utils} ]` : 'btn'}
             onClick={handleClick}
             data-type={props.type ? props.type : undefined}
             {...props.attributes}
        >
            {props.children}
            {getTypeIcon() || (props.icon?.name && props.icon?.name !== "none") ?
                <Icon name={getTypeIcon() ? getTypeIcon() : props.icon?.name}{...props.icon}/>
                :
                undefined}
        </Tag>
    );
}