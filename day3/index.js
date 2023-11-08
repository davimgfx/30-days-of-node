const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

// libs installs

console.log(format(new Date(), "ddMMyyyy\tHH:mm:ss"))

console.log(uuid())