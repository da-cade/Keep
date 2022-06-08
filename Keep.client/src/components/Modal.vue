<template>
  <div class="modalDialog d-flex justify-content-center" ref="dialog">
    <div class="modalContent bg-light rounded">
      <slot name="modal-content-slot"></slot>
    </div>
  </div>
</template>


<script>
import { onMounted, ref, watchEffect } from "@vue/runtime-core"
import { useRouter } from "vue-router"
export default {
  setup() {
    const router = useRouter()
    const dialog = ref()
    watchEffect(() => {
      dialog.value
    })
    onMounted(() => {
      dialog.value.addEventListener('click', e => {
        if (e.target === e.currentTarget) {
          router.go(-1)
        }
      })
    })
    return {
      router,
      dialog,
    }
  }
}

</script>


<style lang="scss" scoped>
.modalDialog {
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.438);
  height: 100vh;
  width: 100vw;
  z-index: 11;
}
.modalField {
  position: relative;
  display: none;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10;
}
.modalContent {
  position: fixed;
  top: 10vh;
  width: 80vw;
  height: 80vh;
  z-index: 20;
}
</style>