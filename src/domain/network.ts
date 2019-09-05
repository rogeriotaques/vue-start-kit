/**
 * Vue Start Kit
 *
 * This is handling the abstractions for making API requests.
 *
 * @author Rogerio Taques
 * @license MIT
 */

import axios from 'axios';

/**
 * An example of a network call.
 * @return Promise
 */
export const getTasks = async () => {
  const url = 'https://randomuser.me/api/?results=5';

  let json;
  let data;

  // Executing the API call in a try/catch block
  // we can handle any possible failure in the process.
  try {
    data = await axios({ url });
    json = data.data;

    data = json.results.map((entry: any, idx: number) => {
      return {
        id: idx + 1,
        text: `${entry.name.title} ${entry.name.first} ${entry.name.last}`,
        complete: idx % 3 === 0,
        editing: false
      };
    });
  } catch (error) {
    data = []; // Prevent error to the user
  }

  return data;
}; // getTasks
