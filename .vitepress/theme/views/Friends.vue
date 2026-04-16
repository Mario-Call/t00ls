<!-- 友链鱼塘 -->
<template>
  <div class="friends">
    <Banner type="page" title="友链鱼塘" desc="友情链接的最新动态">
      <template v-slot:header-slot>
        <div class="menu">
          <div class="menu-item refresh" @click="refreshRSS">
            <i class="iconfont icon-refresh" />
            <span class="name">刷新</span>
          </div>
        </div>
      </template>
    </Banner>
    <!-- RSS 内容 -->
    <div class="rss-content">
      <div v-if="friendsData" v-for="friend in friendsData.typeList" :key="friend.url" class="friend-rss">
        <h3>{{ friend.name }}</h3>
        <div v-if="rssData[friend.url]" class="rss-items">
          <div v-for="item in rssData[friend.url].slice(0, 5)" :key="item.link" class="rss-item">
            <a :href="item.link" target="_blank" class="rss-title">{{ item.title }}</a>
            <p class="rss-desc">{{ item.description }}</p>
            <span class="rss-date">{{ formatDate(item.pubDate) }}</span>
          </div>
        </div>
        <div v-else class="loading">加载中...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import linkData from '@/assets/linkData.mjs';

const friendsData = linkData.find(item => item.type === 'friends');

const rssData = ref({});

const refreshRSS = async () => {
  if (!friendsData) return;
  for (const friend of friendsData.typeList) {
    if (!friend.rss) continue;
    try {
      const response = await fetch(friend.rss);
      const text = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, 'text/xml');
      const items = Array.from(xml.querySelectorAll('item')).map(item => ({
        title: item.querySelector('title')?.textContent || '',
        link: item.querySelector('link')?.textContent || '',
        description: item.querySelector('description')?.textContent || '',
        pubDate: item.querySelector('pubDate')?.textContent || '',
      }));
      rssData.value[friend.url] = items;
    } catch (error) {
      console.error('Error fetching RSS for', friend.name, error);
      rssData.value[friend.url] = [];
    }
  }
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('zh-CN');
};

onMounted(() => {
  refreshRSS();
});
</script>

<style lang="scss" scoped>
.friends {
  .rss-content {
    .friend-rss {
      margin-bottom: 2rem;
      h3 {
        color: var(--main-color);
      }
      .rss-items {
        .rss-item {
          margin-bottom: 1rem;
          padding: 1rem;
          background: var(--main-card-background);
          border-radius: 8px;
          border: 1px solid var(--main-card-border);
          .rss-title {
            display: block;
            font-weight: bold;
            color: var(--main-text-color);
            text-decoration: none;
            &:hover {
              color: var(--main-color);
            }
          }
          .rss-desc {
            margin: 0.5rem 0;
            color: var(--main-text-color-secondary);
          }
          .rss-date {
            font-size: 0.8rem;
            color: var(--main-text-color-secondary);
          }
        }
      }
      .loading {
        color: var(--main-text-color-secondary);
      }
    }
  }
}
</style>