import type { App } from 'vue';
import navbar from '@/components/Navbar/navbar.vue';
import PageStructure from '@/components/PageStructure/page-structure.vue';
import CardPosters from '@/components/CardPosters/card-posters.vue';

export function setComponent(app: App) {
    app.component('nav-bar', navbar);
    app.component('page-structure', PageStructure);
    app.component('card-posters', CardPosters);
}