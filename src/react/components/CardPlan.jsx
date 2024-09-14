import Button from "./Button";

export default function CardPlan(props) {

    function localizationCurrencyFormat(num) {
        return num.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    return (
        <div className={`[ card-plan ] [ ${props.highlight ? "fg-neutral-1 bg-neutral-5" : "fg-neutral-5 bg-neutral-2"} ]`}
             data-card-highlight={props.highlight}>
                {props.highlight && <span className="pattern-line" aria-hidden="true"></span>}
            <div className="[ card-plan__container ] [ stack ]">
                <div className="[ card-plan__content ] [ flow ] [ space-4 ]">
                    <div className="stack">
                        <h3 className="title-4">{props.title}</h3>
                        <p className={`measure-3 ${props.highlight ? "fg-neutral-3" : "fg-neutral-4"}`}>{props.desc}</p>
                    </div>
                    <div className="card-plan__price">
                        <p className="title-5">{localizationCurrencyFormat(props.price)}</p>
                        {props.frequency && <p className={props.highlight ? "fg-neutral-3" : "fg-neutral-4"}>per {props.frequency}</p>}
                    </div>
                </div>
                <Button to={props.btn.to} utils="space-4">{props.btn.content}</Button>
            </div>
        </div>
    );
}