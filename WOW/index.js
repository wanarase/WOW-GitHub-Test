console.log("Tests");
const express = require('express');
var applicant = express();
applicant.listen(3030);
applicant.use(express.static("public"));
