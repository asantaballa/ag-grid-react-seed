module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // for css imports
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
};