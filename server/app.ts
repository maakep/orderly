import * as express from 'express';
import root from './root';
import { json, urlencoded } from 'body-parser';
import * as cookieParser from 'cookie-parser';

const app: express.Express = express();

app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static('assets'));

app.get('/*.(js|png)', (req, res) => {
  res.sendFile(req.url, root);
});

app.get('/members', (req, res) => {
  res.send('endpoint to get all members in json');
});

app.get('/*', (req, res) => {
  res.sendFile('/index.html', root);
});

export default app;
