const axios = require('axios');
exports.handler = function (event, context, callback) {
  //let response = await fetch('https://etherorcs-spy.vercel.app/api/holders');

  axios.get('https://etherorcs-spy.vercel.app/api/holders').then((resp) => {
    callback(null, { statusCode: 200, body: JSON.stringify(resp.data) });
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
