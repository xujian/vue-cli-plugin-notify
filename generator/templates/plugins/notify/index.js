import notify from 'vue-cli-plugin-notify'

export default ({app, router, Vue}) => {
  Vue.mixin(notify)
}