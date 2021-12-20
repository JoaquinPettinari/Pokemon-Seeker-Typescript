import { apiPromise } from '../../utils/utils'


export function getAllPokemons(limit:number) {
  return apiPromise(`pokemon?limit=${limit}&offset=0`, {body: undefined})
}
  