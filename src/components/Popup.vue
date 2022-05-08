<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { initBrowserData } from '../core/browser-core'
import defaultData from '../mock/default.json'

const data = initBrowserData()
const products2 = ref()
const editingRows = ref([])
const onRowEditSave = (event: any) => {
    let { newData, index } = event;
    products2.value[index] = newData;
}
const statuses = ref([
            {label: 'In Stock', value: 'INSTOCK'},
            {label: 'Low Stock', value: 'LOWSTOCK'},
            {label: 'Out of Stock', value: 'OUTOFSTOCK'}
        ])

const getStatusLabel = (status: string) => {
            switch(status) {
                case 'INSTOCK':
                    return 'In Stock';

                case 'LOWSTOCK':
                    return 'Low Stock';

                case 'OUTOFSTOCK':
                    return 'Out of Stock';

                default:
                    return 'NA';
            }
        }

onMounted(
  () => {
     products2.value = defaultData.data
})
</script>

<template>
  <h1>Hi ! this is a popup</h1>
  <DataTable :value="products2" editMode="row" dataKey="id" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">
                <Column field="code" header="Code" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                </Column>
                <Column field="name" header="Name" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" style="width:20%">
                    <template #editor="{ data, field }">
                        <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                            <template #option="slotProps">
                                <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                            </template>
                        </Dropdown>
                    </template>
                    <template #body="slotProps">
                        {{getStatusLabel(slotProps.data.inventoryStatus)}}
                    </template>
                </Column>
                <Column field="price" header="Price" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" />
                    </template>
                </Column>
                <Column :rowEditor="true" style="width:10%; min-width:8rem" bodyStyle="text-align:center"></Column>
            </DataTable>
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
