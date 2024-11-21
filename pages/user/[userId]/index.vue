<script setup>
const route = useRoute();
navigateTo(`/user/${route.params.userId}/profile`);
</script>

<template>
  <div>Index</div>
</template>

<style scoped lang="scss"></style>
