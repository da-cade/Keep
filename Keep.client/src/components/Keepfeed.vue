<template>
  <div class="masonryContainer mt-3">
    <Transition name="modalFade">
      <div class="hover-over rounded" v-if="!loaded">
        <svg
          style="margin-top: 30vh"
          version="1.1"
          id="L7"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 100 100"
          xml:space="preserve"
        >
          <path
            fill="#fff"
            d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="2s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
          <path
            fill="#fff"
            d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="-360 50 50"
              repeatCount="indefinite"
            />
          </path>
          <path
            fill="#fff"
            d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="2s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </Transition>
    <Transition name="modalFade">
      <div v-show="loaded">
        <Keep v-for="k in keeps" :key="k.id" :keep="k" />
      </div>
    </Transition>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import { onMounted, watchEffect } from "@vue/runtime-core"
export default {
  props: {
    keeps: {
      type: Array,
      required: true
    }
  },
  setup() {
    const loaded = ref(false)
    // REVIEW waterfall
    onMounted(() => setTimeout(() => {
      loaded.value = true
    }, 1500))
    return {
      loaded
    }
  }
}
</script>


<style lang="scss" scoped>
.modalFade-enter-active,
.modalFade-leave-active {
  transition: opacity 1s ease;
}

.modalFade-enter-from,
.modalFade-leave-to {
  opacity: 0;
}
.masonryContainer {
  position: relative;
  width: 94vw;
  min-height: 80vh;
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
  .hover-over {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: rgba(150, 149, 149, 0.403);
    width: 100%;
    height: 100%;
    z-index: 4;
    top: 0;
    left: 2;
    right: 2;
  }
  @import url(https://fonts.googleapis.com/css?family=Comfortaa:400,700,300);

  *,
  html {
    margin: 0;
    padding: 0;
  }

  $fontColor: #fff;

  svg {
    width: 100px;
    height: 100px;
    margin: 20px;
    display: inline-block;
  }
}

//follow me template
.made-with-love {
  margin-top: 20px;
  padding: 10px;
  font-size: 10px;
  font-family: arial;
  color: #fff;
  i {
    font-style: normal;
    color: #f50057;
    font-size: 14px;
    position: relative;
    top: 2px;
  }
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>