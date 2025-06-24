<template>
  <div class="container p-3 mx-auto md:p-8 flex flex-col items-center justify-center min-h-[60vh]">
    <div class="mb-8 text-center text-white">
      <h2 class="mb-2 text-2xl font-bold">Contact</h2>
      <p class="mb-6 text-amber-200">Silakan hubungi saya melalui form di bawah ini atau lewat media sosial.</p>
    </div>
    <form
      @submit.prevent="submitForm"
      class="w-full max-w-md bg-[#1e1e1f] border-[#383838] rounded-xl text-white p-6 flex flex-col gap-4 shadow-lg"
    >
      <input v-model="name" type="text" placeholder="Nama" required class="p-2 rounded bg-[#232324] border border-[#383838]" />
      <input v-model="email" type="email" placeholder="Email" required class="p-2 rounded bg-[#232324] border border-[#383838]" />
      <textarea v-model="message" placeholder="Pesan" required class="p-2 rounded bg-[#232324] border border-[#383838]"></textarea>
      <button type="submit" class="px-4 py-2 font-bold text-black rounded bg-amber-400 hover:bg-amber-300">Kirim</button>
      <div v-if="success" class="mt-2 text-sm text-green-400">Pesan berhasil dikirim!</div>
    </form>
    <div class="mt-8 text-center text-white">
      <div class="mb-2">Atau hubungi saya di:</div>
      <div class="flex flex-col items-center gap-2">
        <a href="mailto:alhammanazil@gmail.com" class="text-amber-300 hover:underline">alhammanazil@gmail.com</a>
        <a href="https://linkedin.com/in/alhammanazil" target="_blank" class="text-amber-300 hover:underline">LinkedIn</a>
        <a href="https://github.com/Alhammanazil" target="_blank" class="text-amber-300 hover:underline">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      success: false,
    }
  },
  methods: {
    submitForm() {
      // Untuk demo, hanya tampilkan pesan sukses
      this.success = true;
      this.name = '';
      this.email = '';
      this.message = '';
      setTimeout(() => {
        this.success = false;
      }, 3000);
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