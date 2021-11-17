const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 500,
        body: 'Invalid request',
      };
    }

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
    };

    let url = 'https://etherorcs-spy.vercel.app/api/holders';

    if (event.queryStringParameters.wallet) {
      url += '/' + event.queryStringParameters.wallet;
    }

    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ data }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
