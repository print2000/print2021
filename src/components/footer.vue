<template>
  <div class="footer border-top">
    <div class="footerul">
  	  <div class="footer-item ">
  	    <div class="indexicon">
          <i class="index" :class="{active: activeIndex == 1}"></i>
        </div>
        <span class="desc">首页</span>
      </div>
      <div class="footer-item ">
  	    <div class="indexicon">
          <i class="area" :class="{active: activeIndex == 2}"></i>
        </div>
        <span class="desc">广州</span>
      </div>
      <div class="footer-item ">
  	    <div class="indexicon">
          <i class="home"></i>
        </div>
        
      </div>
      <div class="footer-item ">
  	    <div class="indexicon">
          <i class="wh" :class="{active: activeIndex == 3}"></i>
        </div>
        <span class="desc">主页</span>
      </div>
      <div class="footer-item ">
  	    <div class="indexicon">
          <i class="me" :class="{active: activeIndex == 4}"></i>
        </div>
        <span class="desc">我的</span>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
	name: 'ComFooter',
	props: ['activeIndex'],
	data() {
		return {

		}
	}
}

</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .footer
    position: fixed
    bottom: 0
    left: 0
    right: 0
    z-index: 1000
    background: #fff
    width: 100%    
    .footerul
      display: flex
      justify-content: center
      align-items: center
      text-align: center
      height: 49px
      .footer-item
        display: inline-block    
        width: 20%
        text-align: center        
        .index
          display: inline-block          
          width: 21px
          height: 21px	      
          background-size: 21px 21px
          background-repeat: no-repeat
          bg-image('tab_btn_book_nor')
          &.active
            display: inline-block            
            width: 21px
            height: 21px
            background-size: 21px 21px
            background-repeat: no-repeat
            bg-image('tab_btn_book_pre')
        .area
          display: inline-block          
          width: 21px
          height: 21px	      
          background-size: 21px 21px
          background-repeat: no-repeat
          bg-image('tab_btn_location_nor')
          &.active
            display: inline-block            
            width: 21px
            height: 21px
            background-size: 21px 21px
            background-repeat: no-repeat
            bg-image('tab_btn_location_pre')
        .home
          display: inline-block          
          width: 55px
          height: 37px	      
          background-size: 55px 37px
          background-repeat: no-repeat
          bg-image('home')          
        .wh
          display: inline-block          
          width: 21px
          height: 21px	      
          background-size: 21px 21px
          background-repeat: no-repeat
          bg-image('tab_btn_home_nor')
          &.active
            display: inline-block            
            width: 21px
            height: 21px
            background-size: 21px 21px
            background-repeat: no-repeat
            bg-image('tab_btn_home_pre')
        .me
          display: inline-block          
          width: 21px
          height: 21px	      
          background-size: 21px 21px
          background-repeat: no-repeat
          bg-image('tab_btn_my_nor')
          &.active
            display: inline-block            
            width: 21px
            height: 21px
            background-size: 21px 21px
            background-repeat: no-repeat
            bg-image('tab_btn_my_pre')
        .desc
          text-align: center
          font-size: 10px
</style>