/**
 * Vue Start Kit
 *
 * This is handling the abstractions for making API requests.
 *
 * @author Rogerio Taques (hello@abtz.co)
 * @license MIT
 */

import { Task } from '~/domain/interfaces';

/**
 * An example of a network call.
 * Be careful: This function (fetch) is not supported on (any version) of IE.
 * @return JSON
 */
export const getTasks = async () => {
  const url = 'https://randomuser.me/api/?results=5';

  let response;
  let json;
  let data;

  // Executing the API call in a try/catch block
  // we can handle any possible failure in the process.
  try {
    response = await fetch(url);
    json = await response.json();

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
