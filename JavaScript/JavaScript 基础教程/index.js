// import {formatDate, DAYS_OF_YEAR} from "./utils.js";

// import format, { DAYS_OF_YEAR as DAYS} from "./utils.js"; //export default了{formatDate}，可以有别名format
// console.log(format(new Date()));
// console.log(DAYS);

//全部导入，所有条目在一个对象中，default条目要用default访问
import * as Utils from "./utils.js";
console.log(Utils.default(new Date()));
console.log(Utils.DAYS_OF_YEAR);