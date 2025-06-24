<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: 'HTML',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
          status: 'Advanced'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
          status: 'Advanced'
        },
        {
          id: 3,
          name: 'JavaScript',
          imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
          status: 'Advanced'
        },
        {
          id: 4,
          name: 'PHP',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png',
          status: 'Intermediate'
        },
        {
          id: 5,
          name: 'MySQL',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Intermediate'
        },
        {
          id: 6,
          name: 'Laravel',
          imageUrl: 'https://laravel.com/img/logomark.min.svg',
          status: 'Intermediate'
        },
        {
          id: 7,
          name: 'Node.js',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png',
          status: 'Intermediate'
        },
        {
          id: 8,
          name: 'Express.js',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-express-8-1175029.png',
          status: 'Intermediate'
        },
        {
          id: 9,
          name: 'React',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-react-4-1175110.png',
          status: 'Intermediate'
        },
        {
          id: 10,
          name: 'MongoDB',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-4-1175139.png',
          status: 'Intermediate'
        },
        {
          id: 11,
          name: 'VueJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp',
          status: 'Beginner'
        },
        {
          id: 12,
          name: 'Tailwind CSS',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
          status: 'Beginner'
        },
        {
          id: 13,
          name: 'Bootstrap',
          imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
          status: 'Beginner'
        }
      ],
      tools: [
        {
          id: 1,
          name: 'Git',
          imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
          status: 'Version Control'
        },
        {
          id: 2,
          name: 'GitHub',
          imageUrl: 'https://img.icons8.com/glyph-neue/512/FFFFFF/github.png',
          status: 'Git Hosting'
        },
        {
          id: 3,
          name: 'NPM',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png',
          status: 'Package Manager'
        },
        {
          id: 4,
          name: 'VS Code',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-visual-studio-code-3251603-2724650.png',
          status: 'Code Editor'
        },
        {
          id: 5,
          name: 'Postman',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png',
          status: 'API Testing'
        },
        {
          id: 6,
          name: 'Figma',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-figma-3521426-2944870.png',
          status: 'Design'
        },
      ]
    };
  },
  methods: {
    getAge() {
      // Hitung usia dinamis berdasarkan tanggal lahir
      const birthDate = new Date(2002, 11, 9); // bulan 11 = Desember (0-based)
      const today = new Date();
      let years = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        years--;
      }
      return years;
    }
  }
}
</script>
<template>

  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
    <article data-page="about">
      <header>
        <div class="flex items-center mb-5 text-2xl font-bold text-white fadein-bot title-section">
          About Me &nbsp;
          <div class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
        </div>
      </header>
      <section
        class="flex flex-col gap-4 text-sm text-left md:text-justify md:text-lg md:grid md:grid-cols-5 md:gap-8 md:items-center">
        <!-- Card effect & shadow pada foto -->
        <div class="flex justify-center md:col-span-2">
          <div class="bg-[#232323] rounded-full p-2 shadow-lg shadow-amber-200/10 transition-all hover:scale-105 duration-300">
            <img class="object-cover border-4 rounded-full w-28 h-28 md:w-44 md:h-44 fadein-up border-amber-200"
              src="/img/profile_2.webp" alt="Photo">
          </div>
        </div>
        <!-- Divider garis vertikal di desktop -->
        <div class="hidden mx-auto border-l md:block h-44 border-amber-200"></div>
        <div class="md:col-span-3">
          <!-- Heading dan summary -->
          <h2 class="mb-2 text-xl font-semibold text-amber-200 fadein-left">Web & Application Developer</h2>
          <p class="mb-3 md:mb-5 fadein-left fadeins-1">
            Hi, I'm <span class="font-bold text-white">Alham Manazil</span> (<span>{{ getAge() }}</span> years old). I love building web applications and solving real-world problems with technology. My main stack is <span class="font-semibold text-amber-200">PHP, Laravel, JavaScript, and MySQL</span>, and I enjoy working with cloud platforms and automation tools.
          </p>
          <ul class="pl-5 mb-3 space-y-1 list-disc fadein-left fadeins-2">
            <li>Web & Application Developer at <span class="font-medium text-white">Pitucorp</span></li>
            <li>Bachelor's degree in Informatics Engineering (GPA 3.83)</li>
            <li>Bangkit Academy graduate (Cloud Computing)</li>
            <li>Certified in IT Support & Cloud Computing</li>
            <li>Hobbies: reading novels and fitness</li>
          </ul>
          <p class="mb-3 fadein-left fadeins-3">
            I'm passionate about learning new things, building impactful products, and collaborating with others. Let's connect on <a href="https://www.linkedin.com/in/alham-manazil/" target="_blank" class="underline text-amber-200 hover:text-white">LinkedIn</a>.
          </p>
        </div>
      </section>
    </article>
  </div>

  <div class="px-5 py-5 mx-3 text-left md:px-12 md:py-10 text-amber-50">
    <article data-page="about">
      <header>
        <div class="flex items-center mb-5 text-2xl font-bold text-white fadein-bot title-section">
          <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul class="flex flex-wrap mb-5 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 1 }" @click="activeTab = 1">Tech
                Stack</button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 2 }"
                @click="activeTab = 2">Tools</button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tech" :key="item.id">
              <div
                class="flex items-center gap-2 px-2 py-2 border rounded cursor-pointer item-tech border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex items-center justify-center w-12 h-12 p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="font-medium transition-all duration-300 translate-y-0 tech text-secondary ">{{ item.name
                    }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tools" :key="item.id">
              <div
                class="flex items-center gap-2 px-2 py-2 border rounded cursor-pointer item-tech border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex items-center justify-center w-12 h-12 p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="font-medium transition-all duration-300 translate-y-0 tech text-secondary ">{{ item.name
                    }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 300ms;
}

.fadeins-2 {
  animation-delay: 500ms;
}

.fadeins-3 {
  animation-delay: 700ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}

/* Responsive grid for about section */
@media (min-width: 768px) {
  .md\:grid-cols-5 {
    grid-template-columns: 2fr 3fr;
  }
  .md\:col-span-2 {
    grid-column: span 2 / span 2;
  }
  .md\:col-span-3 {
    grid-column: span 3 / span 3;
  }
}
</style>
