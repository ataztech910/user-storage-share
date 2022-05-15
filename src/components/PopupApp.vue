<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { initBrowserData } from '../core/browser-core'
import defaultData from '../mock/default.json'
import Cookies from './CookiesLayout.vue'
import LocalStorageLayout from './LocalStorageLayout.vue'

const data = ref()
const products2 = ref()

onMounted(
  async () => {
    console.log('started')
    products2.value = defaultData.data
    data.value = await initBrowserData(true)
    console.log(data.value)
  })
</script>

<template>
  <TabView>
    <TabPanel header="Cookies">
      <Cookies :cookies="data ? data.cookies : []"/>
    </TabPanel>
    <TabPanel header="Local storage">
      <LocalStorageLayout :storage="data ? data.storage.localStorage : {}" />
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
