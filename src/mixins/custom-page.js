import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('customPage')
import componentOptions from '@/components/componentOptions.json'

export default {
  filters: {
    // 组件码转组件名
    stageName(value) {
      let item = componentOptions.find(v => v.stage_code === value)
      if (item) {
        return item.name
      } else {
        return value
      }
    }
  },
  computed: {
    ...mapState(['form', 'settingType', 'activeIndex', ]),
    ...mapGetters(['activeComponent', ])
  },
  methods: {
    ...mapMutations(['setForm', 'setSettingType', 'setactiveIndex', 'setActiveComponent', ]),
    ...mapActions(['clearComponents', 'deleteComponent', 'activateComponent', 'addComponent', ]),
    // 数组去重
    uniq(array){
      let arr = array.filter(v => v && (v.id || v.id === 0))
      let hash = {}
      arr = arr.reduce((p, v) => {
        hash[v.id] ? '' : hash[v.id] = true && p.push(v)
        return p 
      }, [])
      return arr
    }
  },
}
