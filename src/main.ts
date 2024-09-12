import './index.css';
import 'primeicons/primeicons.css'

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { setComponentPrime } from './modules/component-primevue.module';
import router from './router';
import { setComponent } from './modules/component.module';

const app = createApp(App);

setComponentPrime(app);
setComponent(app);

app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        prefix: "p",
        darkModeSelector: "white",
        cssLayer: false,
      },
    },
  });
app.mount('#app');
app.use(router);