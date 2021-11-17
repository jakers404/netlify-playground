const axios = require('axios');
exports.handler = function (event, context, callback) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  };

  let url = 'https://etherorcs-spy.vercel.app/api/holders';
  if (event.queryStringParameters.wallet) {
    url += '/' + event.queryStringParameters.wallet;
  }
  console.log(url);

  axios
    .get(url)
    .then((resp) => {
      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(resp.data),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(err),
      });
    });
};
