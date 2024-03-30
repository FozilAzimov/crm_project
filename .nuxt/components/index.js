export { default as ButtonGeneric } from '../..\\components\\Generics\\ButtonGeneric.vue'
export { default as InputGeneric } from '../..\\components\\Generics\\InputGeneric.vue'
export { default as ForgotPasswordRoot } from '../..\\components\\LoginRegister\\ForgotPassword\\ForgotPasswordRoot.vue'
export { default as LeftTemplate } from '../..\\components\\LoginRegister\\ForgotPassword\\LeftTemplate.vue'
export { default as RightFooterTemplate } from '../..\\components\\LoginRegister\\ForgotPassword\\RightFooterTemplate.vue'
export { default as RightTemplate } from '../..\\components\\LoginRegister\\ForgotPassword\\RightTemplate.vue'
export { default as RightTitleTemplate } from '../..\\components\\LoginRegister\\ForgotPassword\\RightTitleTemplate.vue'
export { default as LeftLoginTemplate } from '../..\\components\\LoginRegister\\Login\\LeftLoginTemplate.vue'
export { default as LoginRoot } from '../..\\components\\LoginRegister\\Login\\LoginRoot.vue'
export { default as RightFooter } from '../..\\components\\LoginRegister\\Login\\RightFooter.vue'
export { default as RightTemplateLogin } from '../..\\components\\LoginRegister\\Login\\RightTemplateLogin.vue'
export { default as RightTitleAndForm } from '../..\\components\\LoginRegister\\Login\\RightTitleAndForm.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
