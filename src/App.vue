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
  const reactiveTips = reactive(tips)
  const randomTips = computed(() => {
    return reactiveTips.sort(() => Math.random() - .5)
  }).value
  const currentTip = computed(() => randomTips[tipIndex.value])
  // 

  // click sound
  const clickSound = new Audio('https://ddl-media.s3.ap-northeast-2.amazonaws.com/click.wav')
  const playClickAudio = () => {
    clickSound.currentTime = 0
    clickSound.play()
  }
  // 

  // manipulate tip index
  const nextTip = () => {
    addIndex()
  }
	const addIndex = () => {
		tipIndex.value = tipIndex.value < tips.length - 1 ? tipIndex.value + 1 : 0
    playClickAudio()
  }
	const substractIndex = () => {
		tipIndex.value = tipIndex.value < 1 ? tips.length - 1 : tipIndex.value - 1
    playClickAudio()
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
