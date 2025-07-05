<template>
    <div class="container p-3 mx-auto md:p-8 flex flex-col items-center justify-center min-h-[60vh]">
        <!-- Social Links Only -->
        <div class="flex flex-col items-center w-full max-w-md gap-4">
            <a
                v-for="item in links"
                :key="item.label"
                :href="item.url"
                target="_blank"
                class="contact-link group"
                @mousedown="activeIndex = item.label"
                @mouseup="activeIndex = null"
                @mouseleave="activeIndex = null"
                :class="{'active-link': activeIndex === item.label}"
            >
                <img :src="item.icon" :alt="item.label + ' icon'" class="icon-img yellow-icon" />
                <span class="w-full text-left">{{ item.label }}</span>
            </a>
        </div>
        <!-- Email Modal (removed) -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: null,
            links: [
                {
                    label: 'Curriculum Vitae',
                    url: 'https://drive.google.com/file/d/1KpBY-fMK6uj-VPNH6fwConxvofO5f5HG/view?usp=sharing',
                    icon: 'https://img.icons8.com/ios-filled/28/ffdb70/resume-website.png'
                },
                {
                    label: 'Portfolio',
                    url: 'https://drive.google.com/file/d/11XD46kPKeDlPhuOI3mLHq3R6SS7Ndt_l/view?usp=sharing',
                    icon: 'https://img.icons8.com/ios-filled/28/ffdb70/briefcase.png'
                },
                {
                    label: 'Github',
                    url: 'https://github.com/Alhammanazil',
                    icon: 'https://img.icons8.com/ios-glyphs/28/ffdb70/github.png'
                },
                {
                    label: 'Linkedin',
                    url: 'https://www.linkedin.com/in/alham-manazil/',
                    icon: 'https://img.icons8.com/ios-filled/28/ffdb70/linkedin.png'
                },
                {
                    label: 'Instagram',
                    url: 'https://www.instagram.com/alham_manazil/',
                    icon: 'https://img.icons8.com/ios-filled/28/ffdb70/instagram-new.png'
                },
                {
                    label: 'Goodreads',
                    url: 'https://www.goodreads.com/user/show/188713225-alham-manazil',
                    icon: 'https://img.icons8.com/ios-filled/28/ffdb70/goodreads.png'
                },
                {
                    label: 'Cloudskillsboost',
                    url: 'https://www.cloudskillsboost.google/public_profiles/a060cb5f-a716-4f2c-84ce-a92887461460',
                    icon: 'https://img.icons8.com/ios-filled/28/ffdb70/cloud.png'
                }
            ]
        }
    },
    methods: {
        copyEmail() {
            // ...existing code if needed...
        }
    }
}
</script>

<style scoped>
.contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: #232324;
    border: 1px solid #383838;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.1s;
    box-shadow: 0 2px 8px 0 rgba(255,219,112,0.04);
    will-change: transform;
    outline: none;
    justify-content: flex-start;
}
.contact-link:hover,
.contact-link:focus,
.contact-link.group:focus-visible {
    background-color: #fbbf24;
    color: #232324;
    box-shadow: 0 4px 24px 0 rgba(255,219,112,0.18);
    transform: translateY(-2px) scale(1.03);
}
.contact-link:hover .icon-img,
.contact-link:focus .icon-img {
    transform: scale(1.18) rotate(-8deg);
}
.icon-img {
    width: 28px;
    height: 28px;
    min-width: 28px;
    min-height: 28px;
    object-fit: contain;
    transition: transform 0.2s;
}
.yellow-icon {
    filter: none;
}
.contact-link span {
    text-align: left;
    width: 100%;
}
.active-link {
    transform: scale(0.96);
    background: #fbbf24 !important;
    color: #232324 !important;
    box-shadow: 0 2px 16px 0 rgba(255,219,112,0.18);
}
.active-link .icon-img {
    transform: scale(1.1) rotate(8deg);
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
