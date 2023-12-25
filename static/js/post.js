---
    layout: null
---

/**
 * 页面ready方法
 */
$(document).ready(function() {
    //generateContent();
    //// share();
    renderComment();
});

/**
 * 侧边目录
 */
function generateContent() {
    var $mt = $('.toc');
    var toc = $(".post ul#markdown-toc").clone().get(0);
    $mt.each(function(i,o){
        $(o).html(toc);
    });
}

function share(){
    window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};
    with(document)0[getElementsByTagName("script")[0].parentNode.appendChild(createElement('script')).src='//bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
}


function renderComment() {
    /*var gittalk = new Gitalk({
        id: md5(window.location.pathname),
        clientID: '{{site.comment.client_id}}',
        clientSecret: '{{site.comment.client_secret}}',
        owner: '{{site.github.username}}',
        repo: '{{site.comment.repo}}',
        admin: ['{{site.github.username}}'],
        perPage: 20,
        distractionFreeMode: false
    });
    gittalk.render('post-comment')
    $("#post-comment").removeClass('hidden');*/

    twikoo.init({
        envId: 'https://comment.ihonux.com', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
        el: '#disqus_thread', // 容器元素
        // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
        // path: location.pathname, // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
        // lang: 'zh-CN', // 用于手动设定评论区语言，支持的语言列表 https://github.com/imaegoo/twikoo/blob/main/src/client/utils/i18n/index.js
    });
    $("#post-comment").removeClass('hidden');
}


