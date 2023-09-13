    // 判断用户是否观看当前页面，浏览器兼容
       let state, visibilityChange;
        if (typeof document.hidden !== 'undefined') {
            visibilityChange = 'visibilitychange';
            state = 'visibilityState';
        } else if (typeof document.mozHidden !== 'undefined') {
            visibilityChange = 'mozvisibilitychange';
            state = 'mozVisibilityState';
        } else if (typeof document.msHidden !== 'undefined') {
            visibilityChange = 'msvisibilitychange';
            state = 'msVisibilityState';
        } else if (typeof document.webkitHidden !== 'undefined') {
            visibilityChange = 'webkitvisibilitychange';
            state = 'webkitVisibilityState';
        }
        document.addEventListener('visibilitychange',function(){
         if (document[state] === 'hidden') {
                       //已离开当前页面
                document.title = "★切换到别的页面去了~★"
            } else if (document[state] === 'visible') {
　　　　//返回了当前页面
                document.title = "★要集中注意力呀★"
            }
});
