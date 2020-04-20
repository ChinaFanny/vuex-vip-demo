import { setTimeout } from 'core-js'

export default {
  buyVip ({ commit }, e) {
    return new Promise((resolve, reject) => {
      // 模拟api交互
      setTimeout(() => {
        // 修改本地state
        commit('setMemberInfo', {
          userStatus: e.userStatus,
          vipLevel: e.vipLevel
        })
        resolve('购买成功')
      }, 1000)
    })
  },

  getFreeVip ({ commit, state }) {
    return new Promise((resolve, reject) => {
      // 模拟api交互
      setTimeout(() => {
        if (state.userStatus === 0) {
          // 只有普通会员才送
          // 修改本地state
          commit('setMemberInfo', {
            userStatus: 1,
            vipLevel: 0
          })
          resolve('分享成功，您已获得一个月高级会员')
        } else {
          resolve('分享成功')
        }
      }, 1000)
    })
  }
}
