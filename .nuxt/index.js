import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_09210afd from 'nuxt_plugin_plugin_09210afd' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_pluginutils_212aafce from 'nuxt_plugin_pluginutils_212aafce' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_373e8199 from 'nuxt_plugin_pluginrouting_373e8199' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_f8730f14 from 'nuxt_plugin_pluginmain_f8730f14' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_workbox_4c819fbc from 'nuxt_plugin_workbox_4c819fbc' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_2b9f183c from 'nuxt_plugin_metaplugin_2b9f183c' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_3046bdb0 from 'nuxt_plugin_iconplugin_3046bdb0' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_27895ac0 from 'nuxt_plugin_axios_27895ac0' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_veevalidate_21716614 from 'nuxt_plugin_veevalidate_21716614' // Source: ..\\plugins\\vee-validate.js (mode: 'all')
import nuxt_plugin_elementui_7aa6cf5e from 'nuxt_plugin_elementui_7aa6cf5e' // Source: ..\\plugins\\element-ui.js (mode: 'all')
import nuxt_plugin_axios_397e53b5 from 'nuxt_plugin_axios_397e53b5' // Source: ..\\plugins\\axios.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"CRM","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"},{"httpEquiv":"Set-Cookie","content":"SameSite=None; Secure"},{"httpEquiv":"Content-Security-Policy","content":"upgrade-insecure-requests"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"unicon-base-frontend"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"unicon-base-frontend"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"unicon-base-frontend"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e3e9fb.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e3e9fb.png","sizes":"512x512"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.5d10f4a6.json","hid":"manifest"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_09210afd === 'function') {
    await nuxt_plugin_plugin_09210afd(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_212aafce === 'function') {
    await nuxt_plugin_pluginutils_212aafce(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_373e8199 === 'function') {
    await nuxt_plugin_pluginrouting_373e8199(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_f8730f14 === 'function') {
    await nuxt_plugin_pluginmain_f8730f14(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_4c819fbc === 'function') {
    await nuxt_plugin_workbox_4c819fbc(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_2b9f183c === 'function') {
    await nuxt_plugin_metaplugin_2b9f183c(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_3046bdb0 === 'function') {
    await nuxt_plugin_iconplugin_3046bdb0(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_27895ac0 === 'function') {
    await nuxt_plugin_axios_27895ac0(app.context, inject)
  }

  if (typeof nuxt_plugin_veevalidate_21716614 === 'function') {
    await nuxt_plugin_veevalidate_21716614(app.context, inject)
  }

  if (typeof nuxt_plugin_elementui_7aa6cf5e === 'function') {
    await nuxt_plugin_elementui_7aa6cf5e(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_397e53b5 === 'function') {
    await nuxt_plugin_axios_397e53b5(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
