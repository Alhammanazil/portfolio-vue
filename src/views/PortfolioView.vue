<script>
export default {
  data() {
    return {
      activeTab: 1,
      items: [
        {
          id: 1,
          name: 'Jejaknesia App',
          imageUrl: 'jejaknesia',
          status: 'A mobile application that helps recommend tourist attractions in Indonesia according to selected preferences.',
          tech: 'NodeJs, Python, Hapi, Kotlin',
          github: 'https://github.com/Jejaknesia',
          demo: 'null'
        },
        {
          id: 2,
          name: 'Personal Branding',
          imageUrl: 'portfolio',
          status: 'My personal branding website, I created this website to display my profile, skills and contact.',
          tech: 'Html, CSS, Javascript, Bootstrap',
          github: 'https://github.com/Alhammanazil/portfolio',
          demo: 'https://alhammanazil.netlify.app/'
        },
        {
          id: 3,
          name: 'Kota Kudus',
          imageUrl: 'kota-kudus',
          status: 'Simple static web about the history, geography, tourism and culinary in kudus city.',
          tech: 'Html, CSS',
          github: 'https://github.com/Alhammanazil/kota-kudus',
          demo: 'https://kudus-city.netlify.app/'
        },
        {
          id: 4,
          name: 'TourGuide',
          imageUrl: 'tourguide',
          status: 'Static website about tourguide',
          tech: 'Html, Bootstrap',
          github: 'https://github.com/Alhammanazil/Tourguide',
          demo: 'https://tourguideweb.netlify.app/'
        },
        {
          id: 5,
          name: 'Bookshelf-App',
          imageUrl: 'bookshelf-app',
          status: 'Project "Bookshelf Apps" is a website for managing book lists. Such as searching, adding, marking, and deleting books.',
          tech: 'Html, CSS, Javascript',
          github: 'https://github.com/Alhammanazil/bookshelf-app.git',
          demo: 'https://bookshelf-alhammanazil.netlify.app/'
        },
        {
          id: 6,
          name: 'Vueshop',
          imageUrl: 'vueshop',
          status: 'Vueshop is a web for selling goods that utilises the price filter feature based on your own preferences and there is also checkout feature.',
          tech: 'Bootstrap, Vue.js',
          github: 'https://github.com/Alhammanazil/vue-cli',
          demo: 'https://vueshop-js.netlify.app/'
        },
        {
          id: 7,
          name: 'Jobless',
          imageUrl: 'jobless',
          status: 'Discover a wide range of remote opportunities and get hired by top companies.',
          tech: 'Slicing UI, Figma, HTML, CSS',
          github: 'https://github.com/Alhammanazil/Jobless.git',
          demo: 'https://jobless-site.netlify.app/'
        },
      ]
    };
  }
}
</script>
<template>
  <div class="px-5 py-5 mx-3 text-left md:px-12 md:py-10 text-amber-50">
    <article data-page="about">
      <header>
        <div
          class="flex flex-col items-center justify-center mb-10 text-2xl font-bold text-white fadein-bot title-section">
          <!-- <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate"></div> -->
          <h4>Past Project Experience</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            Explore the projects I've worked on so far</h4>
        </div>
      </header>
      <section>
        <div>
          <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
            <div v-for="item in items" :key="item.id">
              <div
                class="item-card flex flex-col items-center gap-2 bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5 ">
                <div class="flex items-center justify-center p-0 lg:p-0 zoom-in">
                  <img alt="HTML" loading="lazy" decoding="async" data-nimg="1" class="drop-shadow-xl rounded-xl"
                    :src="'/img/portfolio-' + item.imageUrl + '.png'">
                </div>
                <div class="flex flex-col items-center w-full gap-2 text-sm md:text-base lg:text-lg">
                  <div class="font-medium title-text text-secondary">{{ item.name }}
                  </div>
                  <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                  <div class="w-full mt-4 text-sm text-left text-normal text-amber-200">
                    {{ item.tech }}
                  </div>
                  <div class="flex justify-end w-full">
                    <div class="flex items-end gap-2 cursor-pointer text-primary">
                      <a v-if="item.github !== 'null'"
                        :href="item.github" target="_blank" rel="noreferrer"
                        title="View github repository" class="transition-all hover:text-accent">
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                          </path>
                        </svg></a>
                        <a v-if="item.demo !== 'null'" :href="item.demo" target="_blank" rel="noreferrer"
                        title="View finished project" class="transition-all hover:text-accent">
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</div></template>

<style>
.item-card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-8px);
}
svg:hover{
  stroke: #ffdb70;
}
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Menggunakan animasi pada elemen yang diinginkan */
.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}
</style>