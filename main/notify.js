let __config = {
  providers: {
    modal: null,
    notice: null,
    dialog: null
  },
  bus: null
}

let notify = {
  setup: ({providers, $bus}) => {
    __config.providers = providers
    __config.$bus = $bus
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
    confirm ({message, options}) {
      if (__config.providers.dialog) {
        return __config.providers.dialog.make({message: message, optoins: options})
      } else {
        console.log('No notice provider defined')
      }
    },
    modal (view, options) {
      options = options || {}
      if (__config.providers.modal) {
        __config.providers.modal.make(view, {
            title: options.title || '对话框'
          }
        )
      } else {
        console.log('No notice provider defined', 'notice()')
      }
      this.$bus.$emit('notify.modal', {
        view,
        options
      })
    },
    spinner () {
      __config.$bus && __config.$bus.emit('spinner')
    },
    unspinner () {
      __config.$bus && __config.$bus.emit('unspinner')
    },
    login (data) {
      __config.$bus && __config.$bus.emit('login.required', data)
    },
    pane ({_update, ...data}) {
    }
  }
}

export default notify