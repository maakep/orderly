import * as express from 'express';
import root from './root';
import { json, urlencoded } from 'body-parser';
import * as cookieParser from 'cookie-parser';
import { loadData } from './product-repo';

const app: express.Express = express();

app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static('assets'));

app.get('/*.(js|png)', (req, res) => {
  res.sendFile(req.url, root);
});

app.get('/data', async (req, res) => {
  const data = await loadData();
  res.send(data);
});

app.get('/*', (req, res) => {
  res.sendFile('/index.html', root);
});

export default app;
