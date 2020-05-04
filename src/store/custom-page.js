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
          "video_url": "http://material-1258771799.cos.ap-shanghai.myqcloud.com/material-shop/wGJiwzUplAjK9k97OLhPvWNr2WJVPtprTj1Sq4L5.mp4",
          "stage_code": "cover_banner",
          "content": null,
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
        },
      ]
    },  // 表单
    settingType: 'page',  // 设置区类型,
    activeIndex: 0 // 当前组件Id
  },
  getters: {
    activeComponent(state) {
      return state.form.components[state.activeIndex]
    }
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
    },
    // 修改激活组件的内容
    setActiveComponent(state, obj) {
      state.form.components[state.activeIndex] = obj
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
    activateComponent({ commit }, index) {
      commit('setActiveIndex', index)
      commit('setSettingType', 'component')
    },
    // 新增组件
    addComponent({ state, commit }, stageCode) {
      let form = state.form
      let component = {
        id: new Date().getTime(),
        name: 'G圈最热',
        image_url: 'http://material-shop.admin.xcxd.net.cn/img/activity-banner.32353b8d.png',
        video_url: '',
        stage_code: stageCode,
        content: '強さは、さらなる高みへ。<br>時計にタフネスという 新たな概念を築き上げたG-SHOCK。<br>すべては、落としても壊れない時計を つくるという開発者の熱き信念、<br>当時の常識を覆す、 無謀ともいえる挑戦から始まった。<br>1981年、プロジェクトチームタフ結成。 <br>200を超える試作が繰り返され、 約2年にも及ぶ歳月が費やされた。 <br>完成したのが、耐衝撃構造。 <br>タフの中核を担うテクノロジーの誕生である。 <br>以来、G-SHOCKは、 終わりなき進化を続けてきた。',
        link: '',
        categorys: [
          {
            name: '分类',
            image_url: 'http://material-1258771799.cos.ap-shanghai.myqcloud.com/material-shop/cFMWcTp2reeDNPfMWNUlPOhVUYL1b6bsAzYXsKzu.png',
            link: 'www.hao123.com'
          }
        ],
        banners: [
          {
            image_url: 'http://material-shop.admin.xcxd.net.cn/img/activity-banner.32353b8d.png',
            link: 'www.baidu.com'
          }
        ]
      }
      form.components.push(component)
      commit('setForm', form)
      commit('setActiveIndex', form.components.length - 1)
      commit('setSettingType', 'component')
    },
  }
}

export default customPage