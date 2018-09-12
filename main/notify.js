import { Notify, Dialog, Platform } from 'quasar'

let notify = {
  data () {
    return {
      Platform
    }
  },
  components: {
    Notify,
    Dialog
  },
  computed: {
  },
  methods: {
    notice (text) {
      Notify.create({
        message: text,
        timeout: 2500,
        color: 'secondary',
        textColor: 'white',
        icon: 'info',
        position: 'top-right'
      })
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
    openModal (view, data) {
      this.$bus.$emit('openModal', {
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
      this.$bus.$emit('loginRequired', data)
    },
    openCompany (id) {
      this.$router.push({
        path: '/company/' + id
      })
    },
    openRight ({_update, ...data}) {
      this.showRight(true)
      this.setRightData({...data})
      this.setRightViewList({name: data.view})
      if (_update && _update === 'contact') { // todo 刷新列表 当前线索状态变为已查看
      }
    },
    unright () { // 关闭right-aside
      this.showRight(false)
      this.setRightViewList({name: 'unright'})
    },
    checkExpiredSubmit () {
      this.openModal('expired', { _padding: false, _header: false, _width: '686px', _height: '414px', _type: 2 })
    },
    number (input) {
      if (typeof input === 'string') {
        return input.replace(/([\w-]+)/g, '<span class="number">$1</span>')
      }
      return ''
    }
  }
}

export default notify