<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <Keepfeed :keeps="keeps" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { keepsService } from "../services/KeepsService"
export default {
  name: 'Home',
  setup() {
    return {
      keeps: computed(() => AppState.keeps)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>