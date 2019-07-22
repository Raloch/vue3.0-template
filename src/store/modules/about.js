const state = {
  all: {
    name: 'Jay',
    obj: {
      age: 40,
      hobby: 'music'
    }
  }
}

const getters = {
  about: state => state.all
}

const actions = {

}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
