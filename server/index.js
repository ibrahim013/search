import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackmiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';


const app = express();


const port = parseInt(process.env.PORT, 10) || 3000;
const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV !== 'production') {
  app.use(webpackmiddleware(compiler));
} else {
  app.use(express.static(path.join(__dirname, '../public')));
}


if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
} else {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
}


app.listen(port);

module.exports = app.listen();
