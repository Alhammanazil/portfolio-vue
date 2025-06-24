<template>
    <div class="w-full h-20 mx-auto md:w-3/5 md:mt-5">
        <div class="p-5 mx-3 bg-white rounded-xl md:p-10 md:mx-0">
            <div>
                <h1 class="text-xl font-bold leading-relaxed text-left text-black md:text-4xl">{{ title }}</h1>
                <div class="mt-3 text-sm text-left text-gray-800">Published at <span>{{ date }}</span></div>
                <div class="h-[2px] w-20 my-5 md:my-10 bg-[#ffdb70] md:w-1/3 aos-init aos-animate mr-2"></div>
                <div>
                    <div class="relative w-full" style="padding-top: 50%;">
                        <img :src="image" class="absolute top-0 left-0 object-cover w-full h-full rounded-lg"
                            alt="Thumbnail">
                    </div>
                </div>
                <div class="mt-8 text-left text-black">
                    <p v-for="(paragraph, index) in content" :key="index" v-html="paragraph"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { supabase } from '@/utils/supabase.js';

export default {
    data() {
        return {
            route: useRoute(),
            title: '',
            image: '',
            date: '',
            content: [],
        }
    },
    mounted() {
        this.getDetails();
    },
    methods: {
        async getDetails() {
            const id = this.route.params.id;
            // Ambil artikel dari Supabase
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('id', id)
                .single();
            if (!error && data) {
                this.title = data.title;
                this.image = data.image;
                this.date = data.date;
                this.content = data.content.split('\n\n');
            }
        }
    }
}
</script>

<style scoped>
/* Add some bottom margin to paragraphs for the desired spacing */
.text-black p {
    margin-bottom: 2em;
}
</style>
<style scoped>
/* Add some bottom margin to paragraphs for the desired spacing */
.text-black p {
    margin-bottom: 2em;
}
</style>
