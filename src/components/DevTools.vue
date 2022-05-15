<script setup lang="ts">
import { ref, defineProps } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs: any) {
  chrome.debugger.attach({ tabId: tabs[0].id }, '1.2')
})

</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>This is a devtools</div>
  </div>
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
