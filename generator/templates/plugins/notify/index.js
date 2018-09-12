import notify from 'vue-cli-plugin-notify'

export default ({app, router, Vue}) => {
  Vue.prototype.$notify = notify
}
