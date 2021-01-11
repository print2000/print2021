<template>
  <div class="op">
    <div class="hot">
      <div class="hotleft">        
      </div>
      <span class="desc">热门目的地</span>
      <div class="hotright">        
      </div>
    </div>
    <div class="hotfour">
      <div class="hotfourleft"></div>
      <div class="hotfourmid">
        <div class="hotf">川西</div>
        <div class="hotf">漠河</div>
        <div class="hotf">西藏</div>
        <div class="hotf">香格里拉</div>
        <div class="hotf">西藏</div>
        <div class="hotf">西藏</div>
        <div class="hotf">西藏</div>
        <div class="hotf">西藏</div>
      </div>
      <div class="hotfourright"></div>
    </div>
    <div class="hot">
      <div class="hotleft">        
      </div>
      <span class="desc">你好!呼仑贝尔</span>
      <div class="hotright">        
      </div>
      <div class="description">line-height的值为具体的数值，可以是相对数值，也可以设置为绝对数值，在静态页面中，文字大小固定时常常使用绝对数值，而对于论坛和博客这些用户可以自定义字体大小的页面</div>
    </div>
  </div>
</template>
<script>
   export default {
   	name: 'hot',
   	data () {
   		return {

   		}
   	}
   }
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .hot
    height: 15px
    background: #fff
    margin-top: 40px
    margin-bottom: 15px
    text-align: center
    line-height: 15px
    .hotleft
      display: inline-block
      vertical-align: middle
      width: 36.5px
      height: 1.5px
      background-size: 36.5px 1.5px
      bg-image('common_img_title_left')
    .hotright
      display: inline-block
      width: 36.5px
      height: 1.5px
      vertical-align: middle
      background-size: 36.5px 1.5px
      bg-image('common_img_title_end')
    .desc
      font-size: 15px
      color: rgba(51,51,51,1)
      margin: 0 15px
    .description
      text-align: left
      padding-left: 12px
      padding-right: 12px
      margin-top: 10px
      margin-bottom: 49px
  .hotfour
    
    height: 96px
    display: flex
    .hotfourleft
      width: 12px
     
    .hotfourright
      width: 12px
      
    .hotfourmid
      flex: 1
      flex-wrap: wrap
      .hotf
        width: 24%
        display: inline-block
        height: 40px
        line-height: 40px
        text-align: center
        background: #ccc
        margin-top: 5px
</style>