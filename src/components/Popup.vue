<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { initBrowserData } from '../core/browser-core'
import defaultData from '../mock/default.json'
import Cookies from './Cookies.vue';

const data = initBrowserData()
const products2 = ref()
const editingRows = ref([])


onMounted(
  () => {
     products2.value = defaultData.data
})
</script>

<template>
  <TabView>
	<TabPanel header="Cookies">
		<Cookies :products2="products2"/>
	</TabPanel>
	<TabPanel header="Local storage">
		Content II
	</TabPanel>
  </TabView>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
