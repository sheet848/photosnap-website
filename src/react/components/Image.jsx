export default function Image(props) {
    const deviceSizes = props.deviceSizes ? [...props.deviceSizes] : ["desktop", "tablet", "mobile"];
    const mediaSizes = props.mediaSizes ? [...props.mediaSizes] : ["64em", "30em"];
    const formats = props.formats ? [...props.formats] : ["webp", "jpg"];

    function getSrcSet(index) {
        let srcSet = [];
        if (props.useMedia) {
            formats.forEach(format => {
                srcSet.push(`assets/images/${props.dir}/${deviceSizes[index]}/${props.name}.${format} ${props.widths[index]}w`);
            });
        } else {
            deviceSizes.forEach((size, index) => {
                formats.forEach(format => {
                    srcSet.push(`assets/images/${props.dir}/${size}/${props.name}.${format} ${props.widths[index]}w`);
                });
            });
        }
        return srcSet;
    }

    function getMedia(index) {
        if (props.mediaSizes === "none") return undefined;
        if (mediaSizes[index]) return `(width > ${mediaSizes[index]})`;
    }

    function getDimension(size, i) {
        if(!props.dimensions) return undefined;
        if (size === 'width') {
            return props.dimensions[i][0]
        } else if (size === 'height') {
            return props.dimensions[i][1]
        }
    }

    function renderSource() {
        if (props.useMedia) {
            return deviceSizes.map((size, index) => (
                <source
                    key={`key${index}`}
                    media={getMedia(index)}
                    srcSet={getSrcSet(index)}
                    width={getDimension("width", index)}
                    height={getDimension("height", index)}
                />
            ));
        } else {
            return (
                <source srcSet={getSrcSet()}/>
            );
        }
    }

    return (
        <picture className={props.utils ? props.utils : undefined} {...props.attributes}>
            {renderSource()}

            <img loading={props.lazy ? "lazy" : "eager"}
                 fetchpriority={props.fetchPriority ? props.fetchPriority : 'auto'}
                 width={getDimension("width", 0)}
                 height={getDimension("height", 0)}
                 aria-hidden={!props.alt}
                 alt={props.alt ? props.alt : undefined}
                 src={`./assets/images/${props.dir}/desktop/${props.name}.jpg`}
            />
        </picture>
    );
}