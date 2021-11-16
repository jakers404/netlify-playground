const axios = require('axios');
exports.handler = function (event, context, callback) {
  //let response = await fetch('https://etherorcs-spy.vercel.app/api/holders');
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  };

  let url = 'https://etherorcs-spy.vercel.app/api/holders';
  if (event.queryStringParameters.wallet) {
    url += '/' + event.queryStringParameters.wallet;
  }

  axios.get('https://etherorcs-spy.vercel.app/api/holders').then((resp) => {
    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify(resp.data),
    });
  });

  //   axios
  //     .get('https://httpbin.org/get')
  //     .then((res) => {
  //       callback(null, { statusCode: 200, body: JSON.stringify(res) });
  //     })
  //     .catch(function (err) {
  //       callback(null, {
  //         statusCode: 200,
  //         body: JSON.stringify({ err: err }),
  //       });
  //     });
};
