import axios from 'axios';
import type { Task } from '@/domain/interfaces';

/**
 * Example of a network call.
 * @return Promise
 */
export const getTasksFromApi = async (): Promise<Task[]> => {
  let data;

  // Executing the API call in a try/catch block
  // possible failures are handled in the process.
  try {
    data = await axios({ url: 'https://randomuser.me/api/?results=5' }).then((res) => res.data?.results || []);

    data = data.map((entry: any, idx: number) => {
      const { title, first, last } = entry.name;

      return {
        id: idx + 1,
        text: `${title} ${first} ${last}`,
        done: idx % 3 === 0
      };
    });
  } catch (error) {
    data = [];
  }

  return data;
}; // getTasksFromApi
