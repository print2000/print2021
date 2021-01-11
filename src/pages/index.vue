<template>
  <div>
    <div class="header">
	    <div class="wrapper">
	      <swiper :options="swiperOption">
	        <swiper-slide>
	          <img class="swiper-img" src="../assets/images/banner1@2x.png" />
	        </swiper-slide>
	        <swiper-slide>
	          <img class="swiper-img" src="../assets/images/banner2@2x.png" />
	        </swiper-slide>
	        <div class="swiper-pagination"  slot="pagination"></div>
	      </swiper>
	    </div>
	    <div class="weightinput">
	      <div class="header-left"></div>
	      <div class="header-input">
	        <span class="iconfont fontfont">&#xe632;</span>
	      输入城市/景点/游玩主题
	      </div>
	      <div class="header-right"></div>
	    </div>
    </div> 
    <ComIcon></ComIcon>  
    <ComHot></ComHot>    
    <ComProducts></ComProducts>
    <ComFooter :activeIndex="1"></ComFooter>
  </div>
</template>

<script>
import ComFooter from '../components/footer'
import ComIcon from '../components/icon'
import ComHot from '../components/hot'
import ComProducts from '../components/products'
 export default{
   name: 'HomeIndex',
   components: {
   	ComFooter,
    ComIcon,
    ComHot,
    ComProducts
   },
   data () {
   	 return {
      swiperOption: {
        pagination:  {
          el: '.swiper-pagination'
        },
        loop: true

      }
      
   	 }
   },
   methods: {

   }





 }

</script>

<style lang="stylus" scoped>
.header
  position relative
  height: 150px
  background: green
  .wrapper    
    overflow: hidden
    width: 100%
    height: 150px    
    background: #eee
    .swiper-img
      width: 100%
      height: 150px
  .weightinput
    position absolute
    top: 7px
    z-index: 200
    display: flex
    width: 100%
    line-height: 30px    
    .header-left
      width: 12px
      float: left
      line-height: 30px
    .header-input
      flex: 1
      height: 30px
      line-height: 30px
      border-radius: 10px
      color: #ccc
      background: #fff
      .fontfont
        padding-left: 15px
    .header-right
      width: 12px
      float: right
      line-height: 30px  
</style>