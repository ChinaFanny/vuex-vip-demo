<template>
    <div class="cartoon">
        <h3 class="title">{{ title }}</h3>
        <div class="content">
            <video :poster="src" src="http://www.w3school.com.cn/i/movie.ogg " controls="controls"></video>
            <h3>简介</h3>
            <p class="content-p">有个男人他拥有世界上一切财富、名望和权势，他就是「海盗王」高路德•罗杰。在临死前说过这样一句话：让全世界的人都奔向大海「想要我的财宝吗？想要的话全就拿去吧……！你们去找吧！我把世界上的一切都放在那里了」。后来世界上的人们将这个宝藏称作“一个大秘宝”（One Piece），许多人为了争夺大秘宝One Piece，无数海盗扬起旗帜，互相斗争，后来就形成了「大海盗时代」。主角蒙奇•D•路飞在遥远的路途上找寻着志同道合的伙伴，携手共进「伟大航线」，目标当上「海盗王」。航海王是一个依着彼此坚毅的友情最终获得胜利，大伙一起朝着梦想扬帆努力的冒险故事。</p>

            <p class="note">
                <strong>注：</strong>分享即可获得免费的一个月vip权益
            </p>
        </div>

        <button class="share-btn" @click="share">分享</button>
    </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'
import store from '../store'

export default {
  data () {
    return {
      title: this.$route.params.title,
      src: this.$route.params.src
    }
  },
  methods: {
    share () {
      // 简单分享
      const c = confirm('课程分享，地址： http://www.muke.com')
      if (c) {
        // 修改state userStatus
        store.dispatch('getFreeVip').then(res => {
          alert(res)
        })
      } else {
        console.log('取消')
      }
    }
  }
}
</script>

<style lang="less">
.cartoon {
    width: 100%;
    height: auto;
    padding: 16px 16px 100px;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    .title {
    }
    .content {
        text-align: left;
        video {
            width: 100%;
        }
        &-p {
            margin-bottom: 20px;
        }
        .note {
            color: #666;
        }
    }
    .share-btn {
        position: fixed;
        bottom: 20px;
        left: 5%;
        width: 90%;
        margin: 16px 0;
        border: none;
        line-height: 3;
        border-radius: 4px;
        font-size: 16px;
        color: #fff;
        background: #373737;
    }
}
</style>
