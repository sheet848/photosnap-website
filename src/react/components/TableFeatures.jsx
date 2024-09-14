import data from "../../data.js";
import Icon from "./Icon.jsx";

export default function TableFeatures() {
    return (
        <table className="[ table-features ] [ stack ]" data-stack-first="true"
        >
            <thead>
                <tr className="[ table-features__head ] [ flow ]">{data.tableFeatures.headerCols.map((headerCol, index) => <th key={`key${index}`} scope="col" className={`[ title-1 ] [ text-uppercase ${index !== 0 ? "hide//below-md justify-self-center//md " : ""} ]`}>{headerCol}</th>)}</tr>
            </thead>
            <tbody className="stack">
            {data.tableFeatures.headerRows.map((headerRow, index) => <tr key={`key${index}`} className="[ table-features__group ] [ flow ]">
                <th scope="row" className="[ title-1 ] [ text-uppercase ]">{headerRow}</th>
                {data.tableFeatures.plans.map((plan, index) => <td className="justify-self-center//md" key={`key${index}`}>
                    <span>
                        <span aria-hidden="true">
                            <span className="fs-1 fw-medium fg-neutral-4 hide//md">{plan.name}</span>
                        </span>
                        {plan.features && plan.features.includes(headerRow) ?
                                <>
                                    <span aria-hidden="true">
                                        <Icon name="check" size="1em"/>
                                    </span>
                                    <p className="sr-only">is included in {plan.name} plan</p>
                                </>
                            :
                                <p className="sr-only">is not included in {plan.name} plan</p>
                            }
                    </span>
                </td>)}
            </tr>)}
            </tbody>
        </table>
    );
}