import 'babel-require';
import express from 'express';
import fallback from 'express-history-api-fallback';
import compression from 'compression';
import zlib from 'zlib';

const root = `${__dirname}/public`;
const env = process.env.NODE_ENV;
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.listen(app.get('port'), () => {
    console.log(`Node app is running on port ${app.get('port')}`);
});

if (env !== 'production') {
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const config = require('./webpack.config');

    app.set('port-proxy', 5001);

    let proxyServer = new WebpackDevServer(webpack(config), {
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        proxy: {
            '*': `http://localhost:${app.get('port')}`
        }
    }).listen(app.get('port-proxy'), 'localhost', (err, result) => {
        if (err) console.error(err);

        console.log(`Hot Node app is running on port ${app.get('port-proxy')}`);
    });
}
