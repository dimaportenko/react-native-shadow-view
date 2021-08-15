package com.reactnativeshadowview

import android.content.Context
import android.util.AttributeSet
import com.facebook.react.bridge.ReadableMap

/**
 * Created by Dmytro Portenko on 10.08.2021.
 */
class ShadowView(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = R.attr.shadowLayoutStyle,
    defStyleRes: Int = 0
) :
    ShadowLayout(context, attrs, defStyleAttr, defStyleRes) {
    init {
        shadow_color = 0
        shadow_with_color = false
        shadow_with_content = true
        shadow_with_css_scale = true
        shadow_with_dpi_scale = true
        shadow_cast_only_background = true
        shadow_x_shift = 0f
        shadow_y_shift = 0f
        shadow_radius = 0f
        shadow_downscale = 1f
    }

    fun getColorWithOpacity(color: Int, opacity: Float): Int {
        return (opacity * 255.0f).toInt() shl 24 or (color and 0x00ffffff)
    }

    fun setShadowProps(shadowProps: ReadableMap?) {
        if (shadowProps != null) {
            val shadowOffset = shadowProps.getMap("shadowOffset")
            if (shadowOffset != null) {
                shadow_x_shift = if (shadowOffset.hasKey("width")) {
                    val shadowX = shadowOffset.getDouble("width").toFloat()
                    shadowX
                } else {
                    0f
                }

                shadow_y_shift = if (shadowOffset.hasKey("height")) {
                    val shadowY = shadowOffset.getDouble("height").toFloat()
                    shadowY
                } else {
                    0f
                }
            }
            if (shadowProps.hasKey("shadowRadius")) {
                val shadowRadius = shadowProps.getDouble("shadowRadius").toFloat()
                shadow_radius = shadowRadius
            }

            shadow_color = when {
                shadowProps.hasKey("shadowColor") -> {
                    var shadowColor = shadowProps.getInt("shadowColor")
                    shadowColor = if (shadowProps.hasKey("shadowOpacity")) {
                        val shadowOpacity = shadowProps.getDouble("shadowOpacity").toFloat()
                        getColorWithOpacity(shadowColor, shadowOpacity)
                    } else {
                        getColorWithOpacity(shadowColor, 0f)
                    }
                    shadowColor
                }
                shadowProps.hasKey("shadowOpacity") -> {
                    val shadowOpacity = shadowProps.getDouble("shadowOpacity").toFloat()
                    getColorWithOpacity(0, shadowOpacity)
                }
                else -> getColorWithOpacity(0, 0f)
            }
        }
    }
}
