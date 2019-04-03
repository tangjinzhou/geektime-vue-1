
let Vue;
function install (_Vue) {
  Vue = _Vue;
  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
  Vue.mixin({ beforeCreate: vuexInit });
}

const Store = function Store (options = {}) {
  const {state = {}, mutations={}, getters={}} = options
  const computed = {}
  const store = this
  store.getters = {};
  for (let [key, fn] of Object.entries(getters)) {
    computed[key] = function () { return fn(store.state, store.getters); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
    });
  }
  this._vm = new Vue({
    data: {
      $$state: state
    },
    computed,
  })
  this._mutations = mutations
}
Store.prototype.commit = function(type, payload){
  if(this._mutations[type]) {
    this._mutations[type](this.state, payload)
  }
}
Object.defineProperties(Store.prototype, { 
  state: { 
    get: function(){
      return this._vm._data.$$state
    } 
  }
});
export default {Store, install}