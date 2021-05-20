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
    const cloneTips = reactiveTips.map((tip) => ({ ...tip }))
    for (let i = cloneTips.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cloneTips[i], cloneTips[j]] = [cloneTips[j], cloneTips[i]];
    }
    return cloneTips;
  }).value
  const currentTip = computed(() => randomTips[tipIndex.value])
  // 

  // click sound
  const clickSound = new Audio('src/assets/click.wav')
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
