import type { App } from 'vue';
import navbar from '@/components/Navbar/navbar.vue';

export function setComponent(app: App) {
    app.component('nav-bar', navbar);
}