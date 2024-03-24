"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const PORT = 8080;
const server = (0, http_1.createServer)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.method);
    if (req.url === "/greet") {
        if (req.method === "GET") {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write("This is greet GET method");
            res.end();
        }
        if (req.method === "POST") {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write("This is greet POST method");
            res.end();
        }
    }
}));
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
