  #移动端 zepto 技巧
  1-制作遮罩层的时候防止遮罩层滑动,可以利用如下代码
    ```
    layer.on('touchmove',function(){
            e.preventDefault();
        });
    ```
  2-限制详情字数

    ```
      /*----限制详情字数----*/
        var gdetial = $(".detail").text().replace(/\s/g, '');
        var glen = gdetial.length;
        if (glen > 32) {
            $(".detail").text("" + gdetial.substring(0, 29) + "...");
        } 
    ```
  3-在活动列表里常用到的[时间倒计时]

    ```
    function time(endtime,type){
          var nowtime = Date.parse(new Date())/1000;
          var midtime = endtime-nowtime,
            html = '';
          if(midtime > 86400){
            html += Math.floor(midtime/86400) + '天 ';
            midtime = midtime%86400;  
          }
          if(midtime > 3600){
            var hour = Math.floor(midtime/3600);
            if(hour > 9){
              html += (hour+ ':');    
            }else{
              html +=('0'+hour+ ':'); 
            }
            midtime = midtime%3600;   
          }else{
            html += '00:' 
          }
          if(midtime > 60){
            var miu = Math.floor(midtime/60);
            if(miu > 9){
              html += (miu+ ':');   
            }else{
              html +=('0'+miu+ ':');  
            }
            midtime = midtime%60;   
          }else{
            html+='00:' 
          }
          if(midtime >= 10){
            html += (midtime + ''); 
          }else if(midtime < 10){
            html += ('0'+ midtime + '');    
          }
          $('#endTime').siblings('span').show();  
          if(type == '1'){
            $('#endTime').html('距结束 '+html);  
          }else if(type == '2'){
            $('#endTime').html('距开抢 '+html);    
          }
      }  
    ```
  4-验证 input 或 textarea 是否为空

    ```
    /*---验证空否---*/
    var hasnull=false;
    function checkNull() {
        hasnull=false;
        var inputs = document.getElementsByTagName('input'), elem; 
        for (var i = 0; i < inputs.length; i++) {
            elem = inputs[i];
            if (elem.type == 'text') {
                if (elem.value == '') { hasnull = true; break; }
            }
        }

        if (!hasnull) {
            var textareas = document.getElementsByTagName('textarea');
            for (var j = 0; j < textareas.length; j++) {
                elem=textareas[j];
                if (elem.value ==(elem.getAttribute('pholder')||'')) { hasnull = true; break; }
            }
        }
    }
    ```
  5-在页面加载进入与离开时进行的手柄操作

    ```
        /*-------页面加载与离开--------*/
        function myLoadHandler(evt){ }
        function myUnloadHandler(evt){ }
        if ("onpagehide" in window) {
            window.addEventListener("pageshow", myLoadHandler, false);
            window.addEventListener("pagehide", myUnloadHandler, false);
        } else {
            window.addEventListener("load", myLoadHandler, false);
            window.addEventListener("unload", myUnloadHandler, false);
        }
    ```
  6-scroll 时出现[回到顶部按钮]

    ```
    //滚动显示回顶部按钮
    window.onscroll = function () {
        var doc = document,
              sh = screen.height,
              stop = doc.documentElement.scrollTop == 0 ? doc.body.scrollTop : doc.documentElement.scrollTop,
              dh = doc.documentElement.scrollTop == 0 ? doc.body.scrollHeight : doc.documentElement.scrollHeight,
        top = $('#top');
        if (stop > sh / 2) {
            top.addClass('die');
        } else {
            top.removeClass('die');
        }
    }
    //回顶部
    function toTop() {
        document.documentElement.scrollTop = document.body.scrollTop =0;
     }

    ```
  7-scroll 到页面底部进行加载更多的操作

    ```
        //判断是否到页面底部
        function scroll(){ 
            var i = document,
                d = screen.height,
                h = i.documentElement.scrollTop == 0 ? i.body.scrollTop: i.documentElement.scrollTop,
                f = i.documentElement.scrollTop == 0 ? i.body.scrollHeight: i.documentElement.scrollHeight,
                if(h + d >= f && option.list_more.html() != '没有更多数据了'){ 
                    option.page+=1;
                    getDate(option.page);
                }
        }
        function getDate() {
            // ajax 操作
        }

    ```
  8-简易判断浏览器端环境

     ```
          var browser = navigator.userAgent;
          var browserEnviroment = {
            ios: browser.indexOf('iPhone') > -1 || browser.indexOf('iPad') > -1,
            android: browser.indexOf('Android') > -1 || browser.indexOf('Linux') > -1,
            weixin: browser.toLocaleLowerCase().indexOf('micromessenger') > -1;
          }
     ```
  9-判断在测试环境还是正式环境

    ```
            window.environment = window.location.host.indexOf('test') > -1 ? 'test.' : ( window.location.host.indexOf('local') > -1 ? 'test.' : '' );
     ```
  10-获取url参数        
 
   ```
          function getURLParam(name) {
              var value = location.search.match(new RegExp("[?&]" + name + "=([^&]*)(&?)","i")); 
              return value ? (value[1]) : value; 
          }
    ```
  11-touchstart效果

    ```
    		//模拟按钮hover效果
        //.hovera { background: #cc6282 !important; }
    		function BtnHover(){
    			for(var i = 0 ; i < arguments.length ; i++){
    				AddBtnHover(arguments[i]);
    			}
    		}
    		function AddBtnHover(ele) {
    			$(ele).on('touchstart',function() {
    			        $(this).addClass('hovera');
    			}).on('touchend',function() {
    			        $(this).removeClass('hovera');
    			});			
    		}
    ```
