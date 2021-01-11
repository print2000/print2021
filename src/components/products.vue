<template>
  
    <div class="sub-container">
      <div class="books-container">
        <div class="products">
          <img class="productsimg" src="../assets/q1.jpg">
          <div class="description">
            <div class='title'>爱你就像爱生命</div>
            <div class='author'>李银河南</div>
            <div class='foot'>
              <span class="footer"> 165</span> 
            </div>
          </div>
          <span class="footera"> 2018</span>
        </div>
        <div class="products">
          <img class="productsimg" src="../assets/q1.jpg">
          <div class="description">
            <div class='title'>爱你就像爱生命</div>
            <div class='author'>李银河南</div>
            <div class='foot'>
              <span class="footer"> 165</span> 
            </div>
          </div>
        </div>
        <div class="products">
          <img class="productsimg" src="../assets/q1.jpg">
          <div class="description">
            <div class='title'>爱你就像爱生命</div>
            <div class='author'>李银河南</div>
            <div class='foot'>
              <span class="footer"> 165</span> 
            </div>
          </div>
        </div>
        <div class="products">
          <img class="productsimg" src="../assets/q1.jpg">
          <div class="description">
            <div class='title'>爱你就像爱生命</div>
            <div class='author'>李银河南</div>
            <div class='foot'>
              <span class="footer"> 165</span> 
            </div>
          </div>
        </div>
      </div>
    </div>


</template>
<script>
 export default {
 	name: 'products',
 	data () {
 		return {

 		}
 	}
 }
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  
    .sub-container 
      background-color: #ff0000
      width: 100%
      margin-top: 80px
      margin-bottom: 60px
      .books-container               
        display: flex
        flex-direction: row
        flex-wrap: wrap
        padding: 0 5px 0 5px
        justify-content: space-between
        .products   
          margin-top: 10px       
          position: relative
          display: flex
          flex-direction: column
          width: 49%

          .productsimg            
            height: 100%
            border-radius: 2px
          .description             
            background-color: yellow
            width: 100%
            position:absolute
            bottom: 0
            font-size: 24px
                    
            .title
              margin-top: 10px
              text-overflow: ellipsis
              white-space: nowrap
              overflow: hidden
              font-size: 12px
            .author
              font-size: 10px
              color: #999999              
              margin-bottom: 10px
              text-overflow: ellipsis
              white-space: nowrap
              overflow: hidden
            .foot
              font-size: 12px
              display: flex
              flex-direction: row
              justify-content: flex-end
              .footer
                color:#666666
                
          .footera
            position: absolute
            top: 12px 
            font-size: 10px 
</style>