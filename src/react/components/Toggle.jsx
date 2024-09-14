import React, {useState} from "react";


export default function Toggle(props) {
    const [toggle, setToggle] = useState(false);

    function handleToggle() {
        if (!props.onClick) return;
        setToggle(!toggle);
        props.onClick();
    }

    function handleLabelClick(bool) {
        if (!props.onClick) return;

        if (props.rearLabel && props.leadLabel) {
            setToggle(bool);
            if (!(bool === toggle)) props.onClick();
        } else {
            handleToggle()
        }
    }

    function renderToggle() {
        return (
            <button className={!(props.leadLabel || props.rearLabel) && props.utils ? `[ toggle ] [ ${props.utils} ]` : 'toggle'}
                    onClick={handleToggle}
                    aria-pressed={toggle}
                    data-toggle-colors='true'
                    {...props.attributes}
            >
                <span className="toggle__handle" aria-hidden="true"></span>
            </button>
        );
    }

    return (
        props.leadLabel || props.rearLabel ?
            <div className={props.utils ? `[ toggle-container ] [ ${props.utils} ]` : 'toggle-container'}>
                {props.leadLabel && <p onClick={() => handleLabelClick(false)} data-active={!toggle}>{props.leadLabel}</p>}
                {renderToggle()}
                {props.rearLabel && <p onClick={() => handleLabelClick(true)} data-active={toggle}>{props.rearLabel}</p>}
            </div> :
            renderToggle()
    );
}