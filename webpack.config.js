const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',

    context: path.resolve(__dirname, './src/js/'),

    entry: './backend-demo.js',

    output: {
        filename: 'backend-demo-bundle.js',
        path: path.resolve(__dirname, './src/js'),
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },

            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },

            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true,
                            sassOptions: {
                                indentedSyntax: true,
                            },
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new VueLoaderPlugin(),
    ],
};