package com.reactnativeshadowview

import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.bridge.ReadableMap

import com.facebook.react.uimanager.annotations.ReactProp


class ShadowViewManager(
  reactContext: ReactApplicationContext
): ViewGroupManager<ShadowView>() {

  override fun getName(): String {
    return "ShadowViewNative"
  }

  override fun createViewInstance(context: ThemedReactContext): ShadowView {
    return ShadowView(context)
  }

  @ReactProp(name = "shadowProps")
  fun setShadowProps(view: ShadowView, shadowProps: ReadableMap?) {
    view.setShadowProps(shadowProps)
  }
}
