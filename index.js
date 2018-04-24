import http from "http";
import { createServer } from "http";
import app from "./server";
const cors = require("cors");

// const whitelist = ['http://localhost:3001' ];
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// };

app.use(cors());
const server = http.createServer(app);
let currentApp = app;

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});

if (module.hot) {
  module.hot.accept(["./server"], () => {
    server.removeListener("request", currentApp);
    server.on("request", app);
    currentApp = app;
  });
}
