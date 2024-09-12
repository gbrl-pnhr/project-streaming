import './index.css';

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { setComponentPrime } from './modules/component-primevue.module';

const app = createApp(App);

setComponentPrime(app);

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