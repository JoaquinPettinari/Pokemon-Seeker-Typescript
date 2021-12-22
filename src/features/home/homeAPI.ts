import { apiPromise } from '../../utils/utils'


export function getPokemons(offset:number) {
  return apiPromise(`pokemon?limit=20&offset=${offset}`, {body: undefined})
}
  