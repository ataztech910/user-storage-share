import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'
import TabView  from 'primevue/tabview'
import TabPanel   from 'primevue/tabpanel'
import Accordion    from 'primevue/accordion'
import AccordionTab    from 'primevue/accordiontab'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/vela-green/theme.css'
import 'primeicons/primeicons.css'

createApp(App)
    .use(router)
    .use(PrimeVue)
    .component('DataTable', DataTable)
    .component('InputText', InputText)
    .component('Column', Column)
    .component('Dropdown', Dropdown)
    .component('TabView', TabView)
    .component('TabPanel', TabPanel)
    .component('Accordion', Accordion)
    .component('AccordionTab', AccordionTab)
    .mount('#app')
