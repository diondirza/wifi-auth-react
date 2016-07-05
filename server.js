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
app.use(function (req, res, next) {
    res.header('Cache-Control', 'public, max-age=31536000');
    next();
});

app.use(express.static(root));
app.use(fallback('index.html', { root }));
app.listen(app.get('port'), () => {
    console.log(`Node app is running on port ${app.get('port')}`);
});
