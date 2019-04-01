import shop from '../../api/shop'
import {PRODUCTS} from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(PRODUCTS.SET_PRODUCTS, products)
    })
  }
}

// mutations
const mutations = {
  [PRODUCTS.SET_PRODUCTS] (state, products) {
    state.all = products
  },

  [PRODUCTS.DECREMENT_PRODUCT_INVENTORY] (state, { id, number }) {
    const product = state.all.find(product => product.id === id)
    product.inventory -= number
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}