let __config = {
  providers: {}
}

let notify = {
  setup: ({providers}) => {
    __config.providers = providers
  },
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    notice (text) {
      if (__config.providers.notice) {
        __config.providers.notice.make({
          message: text
        })
      } else {
        console.log('No notice provider defined', 'notice()')
      }
    },
    confirm ({text, data, routeName, action, methods}) {
      this.$q.dialog({
        title: '提示',
        message: text,
        ok: '确定',
        preventClose: true,
        cancel: '取消'
      }).then(() => { // 点击确认
        methods(data)
      }).catch(() => { // 点击取消
        this.notice('已取消')
      })
    },
    modal (view, data) {
      this.$bus.$emit('notify.modal', {
        view,
        data
      })
    },
    spinner () {
      this.$bus.$emit('spinner')
    },
    unspinner () {
      this.$bus.$emit('unspinner')
    },
    login (data) {
      this.$bus.$emit('login.required', data)
    },
    pane ({_update, ...data}) {
    }
  }
}

export default notify