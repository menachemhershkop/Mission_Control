import Logs from "../class/logs.js";
import { logList } from "./logs.js";

export function createLog(id,type, msg, user){

    logList.push(new Logs(Math.random(),id,type,msg, user, Date()))
}