<template>
  <div class="masonryContainer">
    <Keep v-for="k in keeps" :key="k.id" :keep="k" />
  </div>
</template>


<script>
export default {
  props: {
    keeps: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
.masonryContainer {
  @media screen and (min-width: 1400px) {
    columns: 6;
    column-gap: 1rem;
  }
  @media screen and (min-width: 576px) and (max-width: 1400px) {
    columns: 4;
    column-gap: 1rem;
  }
  @media screen and (max-width: 576px) {
    columns: 2;
    column-gap: 1rem;
  }
  // div {
  //   width: 150px;
  //   margin: 0 1rem 1rem 0;
  //   display: inline-block;
  //   width: 100%;
  // }
}
</style>