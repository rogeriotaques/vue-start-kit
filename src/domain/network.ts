/**
 * Vue Start Kit
 *
 * Where the abstractions for API requests should be.
 *
 * @author Rogerio Taques
 * @license MIT
 */

import axios from 'axios';

import { Task, Person } from '~/domain/interfaces';

/**
 * Example of a network call.
 * @return Promise
 */
export const getTasks = async (): Promise<Task[]> => {
  const url = 'https://randomuser.me/api/?results=5';

  let data;

  // Executing the API call in a try/catch block
  // possible failures are handled in the process.
  try {
    data = await axios({ url });

    const json = data.data;

    data = json.results.map((entry: Person, idx: number) => {
      const { title, first, last } = entry.name;

      return {
        id: idx + 1,
        text: `${title} ${first} ${last}`,
        complete: idx % 3 === 0,
        editing: false
      };
    });
  } catch (error) {
    data = [];
  }

  return data;
}; // getTasks
