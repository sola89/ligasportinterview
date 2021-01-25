export function getLibs (state) {
  return state.libs
}

export const getLibById = (state) => (id) => {
  return state.libs.filter(item => item.data.general.id === Number(id))
}

export const getLibsByTag = (state) => (tagName) => {
  return state.libs.filter((lib) => {
    if (lib.data.general.tags === undefined) {
      return false
    }

    return lib.data.general.tags.findIndex(tag => {
      return tag.name === tagName
    }) !== -1
  })
}
