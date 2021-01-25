import ApiClient from 'src/classes/apiClient'

export async function fetchLibs ({ commit }) {
  const client = new ApiClient('/database/data.json')
  const data = await client.getData()

  commit('setLibs', data)
}
