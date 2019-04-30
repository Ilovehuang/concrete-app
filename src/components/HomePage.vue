<template>  
<div class="homepage">
  <!--标题-->
  <div class="title">
      <img src="../assets/homepage/images/banner.png">
  </div>

  <!--管理部分-->

  <div class="manager">
          <div class="project">
              <router-link to="/product">
              <img src="../assets/homepage/images/project.png" alt="">
              <span>施工项目</span>
            </router-link>
            </div>
          <div class="contract">
              <router-link to="/contract">
              <img src="../assets/homepage/images/contract.png" alt="">
              <span>合约管理</span>
            </router-link>
          </div>
      <div class="order">
          <img src="../assets/homepage/images/order.png" alt="">
          <span>订单管理</span>
      </div>
      <div class="takeover">
          <img src="../assets/homepage/images/takeover.png" alt="">
          <span>收货信息</span>
      </div>
      <div class="suggestion">
          <img src="../assets/homepage/images/suggestion.png" alt="">
          <span>投诉建议</span>
      </div>
     
  </div>

  <!--中间线-->
  <div class="center_line"></div>

  <!--动态-->
  <div class="trends">
      <div class="trends_title">
        <div class="trends_icon">
          <div class="trends_span">动态</div>
        </div>
      </div>
      <div class="trends_container">{{trends}}</div>
  </div>
  
 <!--底部线-->
  <!-- <div class="footer_line"></div> -->

  <!--底部栏-->
  <div class="footer">
      <div class="homepage_footer">
          <img src="../assets/homepage/images/homepage_footer.png" alt="">
      </div>
      <div class="message_footer">
          <img src="../assets/homepage/images/message.png" alt="">
      </div>
      <div class="find_footer">
          <img src="../assets/homepage/images/find.png" alt="">
      </div>
      <div class="my_footer">
          <img src="../assets/homepage/images/my.png" alt="">
      </div>
  </div>
  
</div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  data(){
    return {
      trends:{

      }
    }
  },
  created(){
    this.$jsonp('https://api.douban.com/v2/movie/search?tag=喜剧').then((response) => {
      this.trends = response.subjects.length
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*百分比布局,flex布局*/
  
  .homepage {
    min-height:100%;margin:0;padding:0;position:relative;
  }
  .title{
    height:210px;
  }
  .manager{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr ;
    justify-items: center;
    align-items: center;
    grid-row-gap: 12px;
    height:220px;
  }

  .center_line{
    background-color: #F3F3F3;
    height:4px;
  }

  .trends{
    height: 180px;
  }
  .trends_container{
    height: 100%;

  }
  .footer{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    justify-items: center;
    align-items: center;
    height:60px;
    position:absolute;bottom:0;width:100%;
    border-top:20px solid #F3F3F3
  }
  .footer_line{
    background-color: #F3F3F3;
    height:20px;
  }
  
  .trends_title{
    margin-left: 2%;
    margin-top: 3%
  }

  .homepage_footer{
    display: flex;
    justify-content: center;
    align-items: center;  
    width: 25%;
  }
  .message_footer{
    display: flex;
    justify-content: center;
    align-items: center;  
    width: 25%;
  }
  .find_footer{
    display: flex;
    justify-content: center;
    align-items: center;  
    width: 25%;
  }
  .my_footer{
    display: flex;
    justify-content: center;
    align-items: center;  
    width: 25%;
  }
  .trends_icon{
    position: relative;
    width: 5px;
    height: 15px;
    background-color:#2B70FC;
    margin-left: 2px
  }
  .trends_span{
    display: block;
    position: absolute;
    margin-left: 15px;
    width: 30px;
    height: 20px;
    font-size: 14px
  }
  
  .title img {
    height: 210px;
    width: 100%
  }
  
  .manager span {
    display: inline-block;
    color: #8D8D8D;
    font-weight: bold;
    font-size: 12px;
    width: 50px;
  }
  .footer img {
    width: 30%;
    height: 40px;
  }
  .manager img  {
    display: block;
    height: auto;
    width: 100%;
  }
  .project{
    width: 45%;
    height: 70%;
  }

  .contract{
    width: 45%;
    height: 70%;
  }
  .order{
   width: 45%;
    height: 70%;
  }
  .takeover{
    width: 45%;
    height: 70%;
  }
  .suggestion{
    width: 45%;
    height: 70%;
  }
  
</style>
