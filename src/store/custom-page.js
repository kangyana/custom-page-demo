/**
 * 定制页 状态管理
 */
const customPage = {
  namespaced: true,
  state: {
    form: {
      name: '',
      components: [
        {
          "id": 34,
          "custom_page_id": 35,
          "name": "全屏banner",
          "product_ids": null,
          "link": null,
          "image_url": "http://dev-1257315589.cos.ap-shanghai.myqcloud.com/marterial-shop/1JS4ckLMRtpF3NUttLyuIgjBqecdQxSScZYTbBm7.jpeg",
          "video_url": "",
          "stage_code": "cover_banner",
          "sort": 0,
          "content": null,
          "created_at": "2020-04-07 14:30:31",
          "updated_at": "2020-04-07 14:30:31"
        },
        {
          "id": 35,
          "custom_page_id": 35,
          "name": "内容",
          "product_ids": null,
          "link": null,
          "image_url": null,
          "video_url": null,
          "stage_code": "text_content",
          "sort": 0,
          "content": "内容\n内容\n内容\n内容\n内容\n内容\n内容",
          "created_at": "2020-04-07 14:30:31",
          "updated_at": "2020-04-07 14:30:31"
        },
      ]
    },  // 表单
    settingType: 'page',  // 设置区类型,
    activeIndex: 0 // 当前组件Id
  },
  getters: {

  },
  mutations: {
    setSettingType(state, str) {
      state.settingType = str
    },
    setForm(state, obj) {
      state.form = obj
    },
    setActiveIndex(state, num) {
      state.activeIndex = num
      console.log(state.activeIndex, num)
    }
  },
  actions: {
    // 清除组件
    clearComponents({ state, commit }) {
      let form = state.form
      form.components = []
      commit('setForm', form)
    },
    // 根据id删除组件
    deleteComponent({ state, commit }, id) {
      let form = state.form
      form.components = form.components.filter(v => v.id !== id)
      commit('setForm', form)
      commit('setSettingType', 'components')
    },
    // 根据索引激活组件
    activeComponent({ commit }, index) {
      commit('setActiveIndex', index)
      commit('setSettingType', 'component')
    },
    // 新增组件
    addComponent({ state, commit }, stageCode) {
      let form = state.form
      let component = {
        id: new Date().getTime(),
        name: '',
        items: [],
        content: '',
        stage_code: stageCode
      }
      form.components.push(component)
      commit('setForm', form)
      commit('setActiveIndex', form.components.length - 1)
      commit('setSettingType', 'component')
    }
  }
}

export default customPage