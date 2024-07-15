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
const utils_1 = require("./utils");
const insertData = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, utils_1.getClient)();
    const query = `
        INSERT INTO users (email,password) 
        VALUES ($1,$2)
        RETURNING *;
    `;
    const values = ["jazzy@gmail.com", "Shiva@123"];
    const result = yield client.query(query, values);
    console.log("result after insert:\n", result.rows[0]);
    client.end();
});
insertData();
