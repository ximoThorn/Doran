import DrButton from './components/button'

const DoranComponents = [
  DrButton
]

const install = function (Vue, opt = {}) {
  DoranComponents.forEach(component => {
    Vue.component(component.name, component)
  })
}

typeof window !== 'undefined' && window.Vue && install(window.Vue)

export default {
  install,
  DrButton
}
