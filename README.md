# MHR-tips

最近集會所收集琉璃原珠打得有點膩，順手刻一下遊戲中的 Loading 過場，也可把有趣的小知識記錄下來（持續收集中）

[Live Demo](https://unickhow.github.io/MHR-tips/)
![image](https://user-images.githubusercontent.com/22793771/118409083-579d5380-b6bb-11eb-8784-150cc4e0db2c.png)



# Log

這次專案初次嘗試 Vue3 + vite 的方式，一開始在 [Codepen](https://codepen.io/uNickHow/pen/QWpEOjB) 先用 Vue2 的方式起個 prototype，然後驚覺很久很久很久沒有更新 github 上面的綠點點了，就索性製作成 gh-pages，但一下子要玩兩個新東西太吃力了 ... 光 Vue3 api 就要每一步都去查文件，很多寫法都不一樣，甚至還直接用 setup script 來折磨自己實在痛苦，最後在部屬 vite 時也遇到了一些小困難，可是看著官方文件實作起來其實有比以前方便很多（印象中），有部分的雷是因為撞到自己的 tampermonkey script 卡很久 🤯

整體來說，composition api 目前用起來當然還沒有 option api 來的順手，尤其是我直接跳到 `<script setup>`，官方文件還沒有很清楚完善到這步，然後 reactive data 要一直 `.value` 走召 火頁 白勺 🙄，在這個專案持續改善的過程中再慢慢摸索 Vue3，反正距離落地普及應該還有一段時間


# TODO

- [ ] 找出 Vue3 directive 的寫法，找了一堆文件都只教 global directive
- [ ] 實現 random array 來讓每次進入時的 tips 亂數排序
- [ ] 加入火芽 bgm
- [ ] 加入 ← → 按鍵音效
- [ ] 找看看有沒有更適合 bg 的草寫字體
- [ ] Vue meta SEO
- [ ] 生個 favicon
