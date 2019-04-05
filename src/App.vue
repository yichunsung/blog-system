<template>
  <div id = "App" class="hello">Hello {{ pageName }}</div>
</template>

<script>
export default {
  data(){
    return {
      pageName: 'Blog !!'
    }
  }
};
</script>

<style scoped>
.hello {
  padding: .5em;
  font-size: 2em;
  background-color: #fcf;
}
</style>