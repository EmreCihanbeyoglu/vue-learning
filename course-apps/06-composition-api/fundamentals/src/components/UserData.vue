<template>
        <h2>{{ fullname }}</h2>
    <h3>{{ age }}</h3>
</template>

<script setup>
    import { computed } from 'vue'
    const props = defineProps({
        firstname: String,
        lastname: String,
        age: Number
    })

    const fullname = computed(() => {
        return props.firstname + ' ' + props.lastname;
    })
   

</script>