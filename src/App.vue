<template>
  <div class="wrapper" v-cloak @click="nextTip" @keyup.left="substractIndex" @keyup.right="addIndex" tabindex="0">
    <div class="container">
      <div class="content">
        <h1>{{ currentTip.title }}</h1>
        <p v-replace-button="currentTip.content"></p>
        <small>◀︎ {{ tipIndex + 1 }}/{{ tips.length }} ►</small>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, reactive } from 'vue'
  import tips from './assets/tips.json'
  import buttons from './assets/buttons.json'

  // data
  let tipIndex = ref(0)
  const newTips = reactive(tips)
  const currentTip = computed(() => newTips[tipIndex.value])
  // 

  // manipulate tip index
  const nextTip = () => {
    addIndex()
  }
	const addIndex = () => {
		tipIndex.value = tipIndex.value < tips.length - 1 ? tipIndex.value + 1 : 0
  }
	const substractIndex = () => {
		tipIndex.value = tipIndex.value < 1 ? tips.length - 1 : tipIndex.value - 1
  }
  // 

  // pre-load images
  // TODO: store images to local
  const preloadImage = () => {
    const bgImg = new Image()
    bgImg.src = 'https://news.destructoid.com/wp-content/uploads/2021/04/MonsterHunterRiseLoadingScreenArt2.png'
    buttons.map((button) => {
      const img = new Image()
      img.src = button.img
    })
  }
  preloadImage()
  // 
</script>

<style>
</style>
