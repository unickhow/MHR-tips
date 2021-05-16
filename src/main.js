import { createApp } from 'vue'
import App from './App.vue'
import './style/main.scss'
import buttons from './assets/buttons.json'

const Instance = createApp(App)

// TODO: find local directive for vue3
const replaceButtonImage = (el, binding) => {
  const elContent = binding.value;
  const matchedButtons = elContent.match(
    new RegExp(buttons.map((b) => b.key).join("|"), "g")
  );
  const matchedButtonsFiltered = [...new Set(matchedButtons)];

  let newContext = matchedButtonsFiltered.reduce((acc, cur) => {
    const img = buttons.find((btn) => btn.key === cur)?.img;
    return acc.replaceAll(cur, `<img src='${img}' role='button-img'>`);
  }, elContent);

  el.innerHTML = newContext;
}

Instance.directive('replace-button', {
  mounted(el, binding) {
    replaceButtonImage(el, binding)
  },
  beforeUpdate(el, binding) {
    replaceButtonImage(el, binding)
  }
})

Instance.mount('#app')
