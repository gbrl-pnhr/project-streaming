<script lang="ts">
import { Streaming } from '@/models/streaming.model';

    export default {
        name: 'cardPosters',
        props: {
            streamingPosters: Streaming
        }
    }
</script>
<template>
    <main>
        <Card class="w-[304px] h-[456px] rounded 2xl overflow-hidden">
            <template #header>
                <img alt="poster-header" :src="`https://image.tmdb.org/t/p/w342${streamingPosters?.poster_path}`"/>
            </template>
        </Card>
    </main>
</template>