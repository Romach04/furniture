const miniCss = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/js/script.js',
    output: {
        filename : 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch:true,
    // module: {
	// 	rules: [
    //         {
    //             test: /\.css$/,
    //             use: ['style-loader', 'css-loader']
    //         },
    //         {
    //             test: /\.scss$/,
    //             use: ['style-loader', 'css-loader', 'sass-loader',miniCss]
    //         }
    //     ]
	// },
    // plugins: [
	// 	new miniCss({
	// 		filename: './assets/css/style.css',
	// 	}),
	// ]
};