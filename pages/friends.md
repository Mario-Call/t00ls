// 配置文件 src/page_data/Friends.ts
export default {
  // API 接口请求优先，数据格式保持和 data 一致
  api: '',
  // api 为空则使用 data 静态数据
  data: [
    {
      "title": "Astro 中使用 Lenis 增加鼠标滚动阻尼感",
      "auther": "韩小韩博客",
      "date": "2025-03-06",
      "link": "https://www.vvhan.com/article/Lenis-in-Astro",
      "content": "在移动端触控交互中，惯性滚动带来的丝滑体验已成为标配，但鼠标滚轮受限于机械结构，滚动时难免产生生硬的段落感。如何让传统滚轮操作也能获得如触控板般的阻尼反馈？Lenis库通过JavaScript模拟惯性算法，成功将”物理惯性”引入网页滚动，本文将解析其实现原理与实战应用。"
    },
    {
      "title": "Astro 添加 Twikoo 评论组件",
      "auther": "韩小韩博客",
      "date": "2025-03-03",
      "link": "https://www.vvhan.com/article/astro-twikoo",
      "content": "Astro在使用视图过渡路由时，在跳转路由时，会导致JS文件只有在第一次进入页面时生效，所以Astro在使用视图过渡路由下Twikoo时无法正常使用的，我是单独写了一个评论组件，对Twikoo进行动态加载，然后在需要评论的页面引入的。"
    },
    {
      "title": "Astro主题-优雅的vhAstro-Theme【使用文档】",
      "auther": "韩小韩博客",
      "date": "2025-03-02",
      "link": "https://www.vvhan.com/article/astro-theme-vhastro-theme",
      "content": "🥝从Z-Blog到Emlog，从Typecho到Hexo，从动态博客到静态博客，作为一个前端，我深入了解了多种SSG工具，如Hexo、Vitepress、Hugo等，并最终锁定了Astro作为重构博客的选择。🍇Astro活跃的社区支持、广泛的现代框架兼容性、高效的性能优化、优秀的开发体验。"
    }
  ]
}