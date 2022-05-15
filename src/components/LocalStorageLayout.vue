<script setup lang="ts">
import { computed, ref } from 'vue'
import { objectToArray } from '../utils/convertions'
const props = defineProps({
  storage: Object
})

const storage = computed(() => objectToArray(props.storage as Partial<any>))

</script>

<template>
<Accordion>
	<AccordionTab :header="storageItem.key" v-for="(storageItem, index) in storage" :key="index">
		{{ storageItem }}
	</AccordionTab>
</Accordion>
</template>

<style></style>