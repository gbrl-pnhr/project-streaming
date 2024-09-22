import './index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from "primevue/config";
import { setComponent } from './modules/component.module';
import { setComponentPrime } from './modules/component-primevue.module';

const app = createApp(App)

setComponentPrime(app);
setComponent(app);

app.use(PrimeVue, {
    unstyled: true
})

app.use(router)
app.mount('#app')
