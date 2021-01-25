export function getLibs (state) {
  return state.libs
}

export const getLibById = (state) => (id) => {
  return state.libs.filter(item => item.data.general.id === Number(id))
}
