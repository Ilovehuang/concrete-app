<template>
<div class="homepage">
  <div class="title">
      <img src="../assets/homepage/images/banner.png">
  </div>
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
  <div class="center_line">

  </div>
  <div class="trends">
      <div class="trends_title">
        <div class="trends_icon">
          <div class="trends_span">动态</div>
        </div>
      </div>
      <div class="trends_container"></div>
  </div>
  
  <div class="footer_line"></div>
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
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*百分比布局,flex布局*/
  .title{
    height: 50%;
  }
  .manager{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr ;
    justify-items: center;
    align-items: center;
    grid-row-gap: 12px;
    height: 20%;
  }
  .trends{
    height: 160px;
  }

  .footer{
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    justify-items: center;
    align-items: center;
    margin-top:6px
  }
  .footer_line{
    height: 14px;
    background-color: #F3F3F3;
  }
  .trends_title{
    margin-left: 2%;
    margin-top: 3%
  }
  .center_line{
    height: 5px;
    background-color: #F3F3F3;
    margin-top: 10%
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
    color: #8D8D8D;
    font-weight: bold;
    font-size: 12px;
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
    width: 39%;
    height: 55%;
  }

  .contract{
    width: 39%;
    height: 55%;
  }
  .order{
    width: 39%;
    height: 55%
  }
  .takeover{
    width: 39%;
    height: 55%;
  }
  .suggestion{
    width: 39%;
    height: 55%;
  }
  
</style>
