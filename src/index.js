import "../css/styles.css";

import { Pipeline } from './pipeline.js';
import { Supply, Task } from './task.js';



//document.getElementsByClassName("cent")[0].style.transform = "scale(1.5) translate(200px,200px)";

var structural = new Supply("Structural", 30);
var electrical = new Supply("Electrical", 10);
var thermal = new Supply("Thermal", 10);
var fairingSupplies = [structural, electrical, thermal];

structural = new Supply("Structural", 50);
electrical = new Supply("Electrical", 20);
thermal = new Supply("Thermal", 30);
var bodySupplies = [structural, electrical, thermal];

structural = new Supply("Structural", 40);
electrical = new Supply("Electrical", 20);
thermal = new Supply("Thermal", 40);
var propulsorSupplies = [structural, electrical, thermal];

var Depot = {};
Depot["Structural"] = 100;
Depot["Electrical"] = 100;
Depot["Thermal"] = 100;
var Crew = 10;

var fairing = new Task("Fairing", 5, 8, 200, fairingSupplies);
var body = new Task("Body", 8, 15, 200, bodySupplies);
var propulsor = new Task("Propulsor", 3, 5, 200, propulsorSupplies);

var buildFairing = function (x) {
    return fairing.execute(x);
};

var buildBody = function (x) {
    return body.execute(x);
};

var buildPropulsor = function (x) {
    return propulsor.execute(x);
};

// With Pipeline
// Reusable with different payload
// Cleaner
var someFormula = new Pipeline([
    buildFairing,
    buildBody,
    buildPropulsor
]);

var result = someFormula.process({ depot: Depot, crew: Crew });   // 10 + 1  => 11
                                        // 11 * 11 => 121
                                        // 121 - 2 => 119
//console.log(result);  // (int) 119
/*
var result = someFormula.process(20);   // 20 + 1  => 21
                                        // 21 * 21 => 441
                                        // 441 - 2 => 339
console.log(result); // (int) 339
*/