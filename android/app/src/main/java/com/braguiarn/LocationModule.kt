package com.braguiarn.location

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.content.Intent
import com.braguiarn.MainActivity

class LocationModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val locationService: LocationService = LocationService(reactContext)

    override fun getName(): String {
        return "LocationModule"
    }

    @ReactMethod
    fun startLocationService() {
        val serviceIntent = Intent(currentActivity, LocationService::class.java)
        currentActivity?.startService(serviceIntent)
    }

    @ReactMethod
    fun stopLocationService() {
        val serviceIntent = Intent(currentActivity, LocationService::class.java)
        currentActivity?.stopService(serviceIntent)
    }
}