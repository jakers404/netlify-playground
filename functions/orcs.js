const axios = require('axios');

exports.handler = async function (event, context) {
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

  let resp = await axios.get(url);
  let responseData = await resp.data;

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(responseData),
  };
};
