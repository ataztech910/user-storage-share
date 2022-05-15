<script setup lang="ts">
import { computed, ref } from 'vue'
const props = defineProps({
  cookies: Array
})

const cookies = computed(() => props.cookies)
const editingRows = ref([])

const onRowEditSave = (event: any) => {
  const { newData, index } = event
  if (cookies.value) {
    cookies.value[index] = newData
    chrome.tabs && chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id as number, { action: "cookie change" }, function(response) {
            console.log(response.farewell);
        });
    })
  }
}

</script>

<template>
<div class="card">
  <DataTable :value="cookies" editMode="row" dataKey="key" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" :scrollable="true" scrollHeight="flex">
        <Column field="key" header="Name" style="width:30%; max-width: 20rem; overflow: hidden;">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]" autofocus style="width: 100%;"/>
            </template>
        </Column>
        <Column field="value" header="Value" style="width:30%; max-width: 20rem; overflow: hidden;">
            <template #editor="{ data, field }">
                <InputText v-model="data[field]" style="width: 100%;" />
            </template>
        </Column>
        <Column :rowEditor="true" style="width: 20%; max-width: 8rem; display: block;" bodyStyle="text-align:right"></Column>
  </DataTable>
</div>
</template>

<style>
.card {
    height: calc(100vh - 143px);
    min-height: 500px;
}
</style>
