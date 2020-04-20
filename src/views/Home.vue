<template>
  <div class="home">
    <h1>你好</h1>
    <p class="text">
      尊敬的
      <span style="color: red;">{{ memberInfo }}用户</span>，欢迎来到德莱联盟！
    </p>

    <div class>
      <cell
        :course="item"
        @goVideoList="goVideoList"
        v-for="(item, index) in carttoonList"
        :key="index"
      ></cell>
    </div>
    <button class="footer-opt btn" @click="recharge">充值</button>
  </div>
</template>

<script>
// @ is an alias to /src
import cell from '@/components/Cell'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    cell
  },
  data () {
    return {
      carttoonList: []
    }
  },
  created () {
    this.carttoonList = [
      {
        id: '1',
        thumb: 'http://pic9.iqiyipic.com/image/20190905/96/f9/v_109343020_m_601_m3_220_124.jpg',
        title: '第一集',
        description: '我叫路飞，将成为海贼王的男人',
        charge: '',
        userStatus: 0,
        vipLevel: 0
      },
      {
        id: '2',
        thumb: 'http://pic8.iqiyipic.com/image/20190905/5f/27/v_109343021_m_601_m4_220_124.jpg',
        title: '第二集',
        description: '大剑客现身！海贼猎人罗罗诺亚·卓洛',
        charge: 'vip会员',
        userStatus: 1,
        vipLevel: 0
      },
      {
        id: '3',
        thumb: 'http://pic3.iqiyipic.com/image/20150803/d9/3b/v_109343022_m_601_220_124.jpg',
        title: '第三集',
        description: '蒙卡 vs 路飞！神秘的美少女是谁?',
        charge: 'v12会员专享',
        userStatus: 2,
        vipLevel: 12
      }
    ]
  },
  computed: {
    ...mapState(['userStatus', 'vipLevel']),
    ...mapGetters(['memberInfo'])
  },
  methods: {
    recharge () {
      this.$router.push('./userCenter')
    },
    goVideoList (e) {
      const res = this.checkPermission(e)
      if (res) {
        this.$router.push({
          name: 'Cartoon',
          params: {
            id: e.id,
            src: e.thumb,
            title: e.title
          }
        })
      } else {
        alert('权限不足，请充值升级后观看')
      }
    },
    checkPermission (e) {
      console.log(e)
      var userStatus = this.$store.state.userStatus
      var vipLevel = this.$store.state.vipLevel
      if (userStatus >= e.userStatus && vipLevel >= e.vipLevel) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  padding: 0 20px 20px;
  box-sizing: border-box;
  h1,
  .text {
    text-align: left;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 20px;
  }
  .btn {
    width: 100%;
    height: auto;
    color: #fff;
    background: #373737;
    margin: 10px 0 20px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 16px;
  }
}
</style>
