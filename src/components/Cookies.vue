<script setup lang="ts">
import { computed, ref } from "vue";
const props = defineProps({
  products2: Array
})

const product = computed( () => props.products2)
const editingRows = ref([])

const onRowEditSave = (event: any) => {
    let { newData, index } = event
    if (product.value) {
        product.value[index] = newData
    }
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
</script>

<template>
<div class="card">
  <DataTable :value="product" editMode="row" dataKey="id" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" :scrollable="true" scrollHeight="flex">
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
</div>
</template>

<style>
.card {
    height: calc(100vh - 143px);
    min-height: 500px;
}
</style>