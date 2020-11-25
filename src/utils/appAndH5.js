export const iOS = /(iPhone|iPod|iPad)/i.test(window.navigator.userAgent)

function callIosAppHandler(key, params) {
  if (window.WebViewJavascriptBridge) {
    return new Promise(resolve => {
      window.WebViewJavascriptBridge.callHandler(key, params, response => {
        resolve(response)
      })
    })
  } else {
    return new Promise(resolve => {
      let callback = () => {
        window.WebViewJavascriptBridge.callHandler(key, params, response => {
          resolve(response)
        })
      }

      if (window.WVJBCallbacks) {
        window.WVJBCallbacks.push(callback)
      } else {
        window.WVJBCallbacks = [callback]
        let WVJBIframe = document.createElement('iframe')
        WVJBIframe.style.display = 'none'
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
        document.documentElement.appendChild(WVJBIframe)
        setTimeout(function () {
          document.documentElement.removeChild(WVJBIframe)
        }, 0)
      }
    })
  }
}

/**
 * 添加商户
 * @param  {[String]}   params   [参数]
 */
export const addLogisticsSupplier = params => {
  // IOS
  if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
    return callIosAppHandler('ios_js_add_logistics_supplier', params)
  } else {
    // Android
    window.riskStore.addLogisticsSupplier()
  }
}

/**
 * 拜访商户
 * @param  {[String]}   params   [参数]
 */
export const visitSupplier = params => {
  // IOS
  if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
    return callIosAppHandler('ios_js_visite_supplier', params)
  } else {
    window.riskStore.visitSupplier(params)
  }
}
