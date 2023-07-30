<template>
    <div class="text-center">
        Hello World
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['auth']
})
function test() {
    console.log('Hello World')
}
</script>