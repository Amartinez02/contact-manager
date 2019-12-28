import Server from './server';
import * as env from "dotenv";

env.config();

Server.app.listen(process.env.PORT, () => {
    console.log('Express server listening on port ' + process.env.PORT);
})