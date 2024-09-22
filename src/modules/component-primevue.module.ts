import type { App } from "vue";
import Button from 'primevue/button';
import Card from 'primevue/card';
import Paginator from 'primevue/paginator';

export function setComponentPrime(app: App) {
    app.component('Button', Button);
    app.component('Card', Card);
    app.component('Paginator', Paginator);
}