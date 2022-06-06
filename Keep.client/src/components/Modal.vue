<template>
  <div class="myModal d-flex justify-content-center">
    <!--TODO @click.stop="closeModal()" not .stopping()-->
    <div class="modalContainer bg-light rounded">
      <slot name="modal-content-slot"></slot>
    </div>
  </div>
</template>


<script>
import { useRouter } from "vue-router"
export default {
  setup() {
    const router = useRouter()
    return {
      router,
      closeModal() {
        router.go(-1)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.myModal {
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.438);
  height: 100vh;
  width: 100vw;
  z-index: 10;
}
.modalContainer {
  position: relative;
  top: 10vh;
  width: 80vw;
  height: 80vh;
}
</style>