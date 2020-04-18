<template>
  <div class="cell" @click="goVideoList(course)">
    <div class="cell-img">
      <img :src="course.thumb" alt mode />
    </div>
    <div class="cell-info">
      <div class="cell-info__name">
        {{ course.title }}
        <div class="cell-info__desc" v-html="course.description"></div>
      </div>
      <div class="cell-info__oth" v-if="course.charge">{{ course.charge }}</div>
      <div class="cell-info__oth" v-else>免费观看</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goVideoList () {
      this.$emit('goVideoList', this.course)
    }
  }
}
</script>

<style lang="less">
.cell {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  .cell-img {
    flex: 0 0 auto;
    img {
      width: 120px;
      height: auto;
      border-radius: 10px;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    }
  }
  .cell-info {
    display: flex;
    flex: 1;
    text-align: left;
    padding-left: 20px;
    margin-bottom: -5px;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    &__name {
      font-size: 16px;
    }
    &__desc {
      font-size: 12px;
      color: #797979;
    }
    &__oth {
      font-size: 12px;
      color: rgb(255, 153, 0);
      margin-bottom: 10px;
    }
  }
}
</style>
