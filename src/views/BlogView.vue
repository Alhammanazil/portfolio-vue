<template>
  <div class="container p-3 mx-auto md:p-8">
    <!-- Toggle tombol tambah artikel -->
    <div class="flex justify-end mb-4">
      <button
        @click="showAddForm = !showAddForm"
        class="px-4 py-2 font-bold text-black rounded bg-amber-400 hover:bg-amber-300"
      >
        {{ showAddForm ? 'Tutup' : 'Artikel' }}
      </button>
    </div>
    <!-- Form Tambah Artikel (toggle) -->
    <div v-if="showAddForm" class="mb-8 bg-[#232324] rounded-xl p-6 text-white">
      <h2 class="mb-4 text-lg font-bold">Tambah Artikel Baru</h2>
      <div class="mb-2 text-xs text-amber-300">
        Artikel hanya tersimpan di browser ini (tidak muncul untuk pengunjung lain).
      </div>
      <form @submit.prevent="addArticle" class="flex flex-col gap-3">
        <input v-model="newArticle.title" type="text" placeholder="Judul Artikel" class="p-2 rounded bg-[#1e1e1f] border border-[#383838]"/>
        <textarea v-model="newArticle.desc" placeholder="Deskripsi singkat" class="p-2 rounded bg-[#1e1e1f] border border-[#383838]"></textarea>
        <textarea v-model="newArticle.content" placeholder="Konten artikel (gunakan paragraf terpisah dengan enter dua kali)" class="p-2 rounded bg-[#1e1e1f] border border-[#383838]"></textarea>
        <input type="file" @change="onImageChange" accept="image/*" class="text-white"/>
        <div v-if="newArticle.image" class="mb-2">
          <img :src="newArticle.image" alt="Preview" class="object-cover w-32 h-32 rounded"/>
        </div>
        <button type="submit" class="px-4 py-2 font-bold text-black rounded bg-amber-400 hover:bg-amber-300">Artikel</button>
      </form>
    </div>
    <div class="relative flex flex-col-reverse md:flex-row">
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
          <div v-if="fetchError" class="py-10 text-center text-red-400">
            {{ fetchError }}
          </div>
          <div v-else-if="allArticles.length === 0" class="py-10 text-center text-white">
            Belum ada artikel.
          </div>
          <article v-for="article in allArticles" :key="article.id">
            <router-link :to="`/read/${article.slug}/${article.id}`" class="flex w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] items-center">
              <div class="w-full pr-4">
                <div class="flex items-center mb-1 text-xs italic text-slate-400">
                  <div class="h-[1px] w-20 bg-amber-200 md:w-5 aos-init aos-animate mr-2"></div> {{ article.date }}
                </div>
                <h1 class="mb-2 text-sm font-bold md:text-md text-amber-200 paraf">{{ article.title }}</h1>
                <div class="hidden text-sm md:block paraf">{{ article.desc }}</div>
              </div>
              <div>
                <div class="flex items-center w-20 h-20 md:w-28 md:h-28">
                  <img :src="article.image" class="rounded-lg md:rounded-xl" alt="">
                </div>
              </div>
            </router-link>
          </article>
        </div>
      </div>
      <div class="w-full p-8 md:w-1/3 h-fit md:sticky md:top-24">
        <!-- Sidebar -->
        <div class="flex flex-col text-left">
          <div class="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">Let's share experiences,
            stories, and knowledge together.
          </div>
          <div class="h-[1px] mt-7 mb-7 w-20 bg-amber-200 aos-init aos-animate mr-2"></div>
          <div class="hidden md:block">
            <div class="font-semibold text-white text-md">Topics</div>
            <div class="flex flex-wrap gap-1 mt-3">
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Bangkit 2023</span>
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Cloud Computing</span>
            </div>
            <!-- <div class="h-[1px] mt-7 mb-7 w-20 bg-amber-200 aos-init aos-animate mr-2"></div>
            <div class="font-semibold text-white text-md">Popular Articles</div> -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { supabase } from '@/utils/supabase.js';

export default {
  data() {
    return {
      articles: [],
      newArticle: {
        title: '',
        desc: '',
        content: '',
        image: '',
      },
      showAddForm: false,
      fetchError: '', // tambahkan untuk error fetch
      user: null,
      loginEmail: '',
      loginPassword: '',
      loginError: '',
    }
  },
  computed: {
    allArticles() {
      // Hanya gunakan articles dari Supabase
      return this.articles;
    }
  },
  mounted() {
    this.fetchArticles();
    this.checkSession();
  },
  methods: {
    async checkSession() {
      const { data } = await supabase.auth.getUser();
      this.user = data.user;
    },
    async login() {
      this.loginError = '';
      const { error, data } = await supabase.auth.signInWithPassword({
        email: this.loginEmail,
        password: this.loginPassword,
      });
      if (error) {
        this.loginError = 'Login gagal: ' + error.message;
      } else {
        this.user = data.user;
        this.showAddForm = false;
      }
    },
    async logout() {
      await supabase.auth.signOut();
      this.user = null;
    },
    async fetchArticles() {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('date', { ascending: false });
      console.log('Supabase data:', data, 'error:', error);
      if (error) {
        this.fetchError = 'Gagal mengambil data artikel: ' + error.message;
        this.articles = [];
      } else {
        this.fetchError = '';
        this.articles = data || [];
      }
    },
    onImageChange(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        this.newArticle.image = evt.target.result;
      };
      reader.readAsDataURL(file);
    },
    async addArticle() {
      if (!this.newArticle.title || !this.newArticle.desc || !this.newArticle.content || !this.newArticle.image) {
        return;
      }
      const slug = this.slugify(this.newArticle.title);
      const date = new Date().toISOString();
      const { error } = await supabase.from('articles').insert([{
        ...this.newArticle,
        slug,
        date,
      }]);
      if (!error) {
        this.fetchArticles();
        this.newArticle = { title: '', desc: '', content: '', image: '' };
        this.showAddForm = false;
      }
    },
    slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    }
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