<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initBrowserData } from '../core/browser-core'
import defaultData from '../mock/default.json'
import Cookies from './CookiesLayout.vue'
import LocalStorageLayout from './LocalStorageLayout.vue'

const data = ref()

onMounted(
  async () => {
    console.log('started')
    initBrowserData(false).then((result) => {
      console.log(result)
      data.value = result
    })
});
</script>

<template>
  <TabView>
    <TabPanel header="Cookies">
      <Cookies :cookies="data ? data.cookies : []"/>
    </TabPanel>
    <TabPanel header="Local storage">
      <LocalStorageLayout :storage="data ? data.storage : []" />
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
