import fetch from 'node-fetch';

exports.handler = async (event, context) => {
  try {
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

    const response = await fetch(url);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
