const paypal = require("paypal-rest-sdk");

paypal.configure({
    mode: "sandbox",
    client_id: "Aef6Ew6xzkR3OaAVxobLWR_bWzUJtbS9qRLCxvyhNfnHT6stcdaf4DB5yDwrLtcMbKP0vznKxbAIlRsv",
    client_secret: "EL3jto0nzmSQIlqCiNZHt10jn-zKslsWcRS-UTaET0lfG8FaDK1XiZlblA9RmrsUv0PGgQ2Emt5rUCjf",
});

module.exports = paypal;