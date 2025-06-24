<template>
  <div class="container p-3 mx-auto md:p-8">
    <div class="mb-8 text-center text-white">
      <h2 class="mb-2 text-2xl font-bold">Blog</h2>
      <p class="text-amber-200">Artikel terbaru saya ada di Medium. Klik judul untuk membaca!</p>
    </div>
    <div class="flex flex-col gap-6 md:px-20">
      <div v-if="loading" class="text-center text-white">Memuat artikel...</div>
      <div v-else-if="error" class="text-center text-red-400">{{ error }}</div>
      <div v-else>
        <div v-if="articles.length === 0" class="text-center text-white">Belum ada artikel.</div>
        <div v-for="item in articles" :key="item.guid" class="bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 mb-4 hover:bg-[#282828']">
          <a :href="item.link" target="_blank" rel="noopener" class="block">
            <div class="mb-1 text-xs italic text-slate-400">{{ new Date(item.pubDate).toLocaleDateString() }}</div>
            <h1 class="mb-2 font-bold text-md text-amber-200">{{ item.title }}</h1>
            <div class="text-sm" v-html="item.description"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      loading: true,
      error: ''
    }
  },
  mounted() {
    const rssUrl = encodeURIComponent('https://medium.com/feed/@alhammanazil18');
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
      .then(res => res.json())
      .then(json => {
        console.log('rss2json result:', json); // Tambahkan log ini
        if (json.status === 'ok') {
          this.articles = json.items;
        } else {
          this.error = 'Gagal mengambil artikel dari Medium.';
        }
        this.loading = false;
      })
      .catch((e) => {
        this.error = 'Tidak bisa terhubung ke Medium.';
        this.loading = false;
        console.error(e);
      });
  }
}
</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) { 
  .paraf {
    display: -webkit-box;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
  /* animation-delay: 1000ms; */
}
</style>