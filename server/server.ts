import * as http from 'http';
import app from './app';
import { TokenSessionKey } from '../shared/constants';
import { OAuth2Client } from 'google-auth-library';
import keys from '../keys';

export class Server {
  port = '8080';
  server: http.Server;
  googleVerificationClient: OAuth2Client;

  constructor() {
    this.server = http.createServer(app);
    this.server.listen(this.port);

    this.googleVerificationClient = new OAuth2Client(keys.gOauthClientId);

    console.log('Listening on :' + this.port);
    this.configureRouting();
  }

  configureRouting() {}

  async verifyTokenAndGetPayload(token: string): Promise<VerificationPayload> {
    if (token == null) {
      return { success: false, statusCode: 403 };
    }

    let ticket = null;
    try {
      ticket = await this.googleVerificationClient.verifyIdToken({
        idToken: token,
        audience: keys.gOauthClientId,
      });
    } catch (err) {
      console.error(err);
    }
    if (ticket == null) {
      return { success: false, statusCode: 403 };
    }

    const payload = ticket.getPayload();
    return { success: true, payload: payload };
  }
}

type VerificationPayload = {
  success: boolean;
  statusCode?: number;
  payload?: any;
};

const server = new Server();
