/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

export const lambdaHandler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      [{
          "title": "The Exorcist",
          "year": 1973,
          "director": "William Friedkin",
          "subgenre": "Supernatural"
        },
        {
          "title": "Halloween",
          "year": 1978,
          "director": "John Carpenter",
          "subgenre": "Slasher"
        },
        {
          "title": "The Shining",
          "year": 1980,
          "director": "Stanley Kubrick",
          "subgenre": "Psychological"
        },
        {
          "title": "A Nightmare on Elm Street",
          "year": 1984,
          "director": "Wes Craven",
          "subgenre": "Slasher"
        },
        {
          "title": "The Thing",
          "year": 1982,
          "director": "John Carpenter",
          "subgenre": "Sci-Fi Horror"
        },
        {
          "title": "Alien",
          "year": 1979,
          "director": "Ridley Scott",
          "subgenre": "Sci-Fi Horror"
        },
        {
          "title": "Rosemary's Baby",
          "year": 1968,
          "director": "Roman Polanski",
          "subgenre": "Psychological"
        },
        {
          "title": "The Texas Chain Saw Massacre",
          "year": 1974,
          "director": "Tobe Hooper",
          "subgenre": "Slasher"
        },
        {
          "title": "Psycho",
          "year": 1960,
          "director": "Alfred Hitchcock",
          "subgenre": "Psychological"
        },
        {
          "title": "The Blair Witch Project",
          "year": 1999,
          "director": "Daniel Myrick, Eduardo Sánchez",
          "subgenre": "Found Footage"
        }
      ])
  };

  return response;
};