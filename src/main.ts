import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'

createApp(App)
    .use(router)
    .use(PrimeVue)
    .component('DataTable', DataTable)
    .component('InputText', InputText)
    .component('Column', Column)
    .component('Dropdown', Dropdown)
    .mount('#app')
