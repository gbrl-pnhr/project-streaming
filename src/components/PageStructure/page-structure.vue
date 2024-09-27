<script lang="ts">
import { Streaming } from '@/models/streaming.model';

    export default {
        name: 'pageStructure',
        props: {
            streamingPosters: {
                type: Array<Streaming>,
                required: true
            }
        }
    }
</script>
<template>
    <main class="bg-gradient-to-t from-gray-700 to-black min-h-screen w-full flex justify-center" >
        <ul class="flex-wrap text-center min-h-screen sm:pt-8">
            <li v-for="cardPosters in streamingPosters" :key="cardPosters.id" class="inline-block relative lg:m-6 lg:mt-4 sm:justify-center my-5">
                <div class="transform transition duration-500 hover:scale-105 ">
                    <card-posters :streamingPosters="cardPosters"/>
                </div>
            </li>
        </ul>
    </main>
</template>