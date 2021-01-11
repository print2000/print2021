<template>
  <div class="icon">
    <div class="iconul">
      <div class="iconli">
        <div>
          <i class="iconmap"></i>
        </div>
        <span class="desc">旅行地图</span>
      </div>
      <div class="iconli">
        <div>
          <i class="icondz"></i>
        </div>
        <span class="desc">定制旅行</span>
      </div>
      <div class="iconli">
        <div>
          <i class="iconzp"></i>
        </div>
        <span class="desc">幸运大转盘</span>
      </div>
      <div class="iconli">
        <div>
          <i class="iconshop"></i>
        </div>
        <span class="desc">旅行商城</span>
      </div>
    </div> 
  </div> 
</template>

<script>
  export default {
  	name: 'icon',
  	data () {
  		return {

  		}
  	}
  } 
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .icon    
    top: 150px
    left: 0
    bottom: 0
    margin-top: 15px
    height: 84px
    background: #fff
    .iconul
      display: flex
      justify-content: center
      align-items: center
      text-align: center
      height: 84px
      .iconli
        width: 25%
        text-align: center
        .iconmap
          display: inline-block
          width: 60px
          height: 60px
          background-size: 60px 60px
          bg-image('home_img_map')
        .icondz
          display: inline-block
          width: 60px
          height: 60px
          background-size: 60px 60px
          bg-image('home_img_book')
        .iconzp
          display: inline-block
          width: 60px
          height: 60px
          background-size: 60px 60px
          bg-image('home_img_turntable')
        .iconshop
          display: inline-block
          width: 60px
          height: 60px
          background-size: 60px 60px
          bg-image('home_img_luggage')
        .desc
          text-align: center
          font-size: 11px
          color: rgba(102,102,102,1)

</style>