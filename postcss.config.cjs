const path = require('path');

module.exports = () => {
    return {
        plugins: [
            require('postcss-preset-env'),
            require('postcss-variable-compress')(
                ['--_block-start', '--_block-end', '--_inline-start', '--_inline-end', '--_translate-x', '--_translate-y', '--_inline-size', "--_thickness", "--_length"]
            ),
            // require("postcss-combine-media-query"),
            require("postcss-combine-duplicated-selectors"),
        ],
    };
};