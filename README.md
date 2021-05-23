# MHR-tips

最近集會所收集琉璃原珠打得有點膩，順手刻一下遊戲中的 Loading 過場，也可把有趣的小知識記錄下來（持續收集中）

[Live Demo](https://unickhow.github.io/MHR-tips/)
![image](https://user-images.githubusercontent.com/22793771/118409083-579d5380-b6bb-11eb-8784-150cc4e0db2c.png)



# Log

這次專案初次嘗試 Vue3 + vite 的方式，一開始在 [Codepen](https://codepen.io/uNickHow/pen/QWpEOjB) 先用 Vue2 的方式起個 prototype，然後驚覺很久很久很久沒有更新 github 上面的綠點點了，就索性製作成 gh-pages，但一下子要玩兩個新東西太吃力了 ... 光 Vue3 api 就要每一步都去查文件，很多寫法都不一樣，甚至還直接用 setup script 來折磨自己實在痛苦，最後在部屬 vite 時也遇到了一些小困難，可是看著官方文件實作起來其實有比以前方便很多（印象中），有部分的雷是因為撞到自己的 tampermonkey script 卡很久 🤯

整體來說，composition api 目前用起來當然還沒有 option api 來的順手，尤其是我直接跳到 `<script setup>`，官方文件還沒有很清楚完善到這步，然後 reactive data 要一直 `.value` 走召 火頁 白勺 🙄，在這個專案持續改善的過程中再慢慢摸索 Vue3，反正距離落地普及應該還有一段時間。

在實現 random array in Vue3 時，才發現原來 computed 的值雖然印出來看是個 reference，必須用 .value 才能深探到內部的數據，但如果在 script 中先做了 computedData.value 存取後，渲染到 template 上時就不會有 reactive 的效果，必須讓該值保持 reference 的狀態

![image](https://user-images.githubusercontent.com/22793771/118518026-5414d580-b76a-11eb-895c-01a8711228d3.png)

```vue
// ❌ Wrong way
<template>
  <p>{{ computedData.name }}</p>
</template>

<script setup>
  const computedData = computed(() => someArray[someIndex]).value
</script>

// ✅ Correct way
<template>
  <p>{{ computedData.name }}</p>
</template>

<script setup>
  const computedData = computed(() => someArray[someIndex])
</script>
```


# Todo

- [x] 實現 random array 來讓每次進入時的 tips 亂數排序
- [x] 生個 favicon
- [x] 加入 ← → 按鍵音效
- [ ] 找出 Vue3 directive 的寫法，找了一堆文件都只教 global directive
- [ ] ~~Vue meta SEO~~ *Vue3 + vite 目前未完全支援，單靜態頁面先寫 html 裡就好*
- [ ] ~~找看看有沒有更適合 bg 的草寫字體~~ *試用了 文書行楷(STXingkai) 但沒支援全字元，只能套一半一半很醜*
- [ ] ~~加入火芽 bgm~~ *怕被吉先不要*
