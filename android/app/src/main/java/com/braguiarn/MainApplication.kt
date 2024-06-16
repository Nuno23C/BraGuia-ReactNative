package com.braguiarn

import android.app.Application
import android.content.Intent
import com.braguiarn.location.LocationModule // Importe o LocationModule aqui
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader

class MainApplication : Application(), ReactApplication {

    override val reactNativeHost: ReactNativeHost =
        object : ReactNativeHost(this) {
            override fun getPackages(): List<ReactPackage> {
                val packages = PackageList(this).packages.toMutableList()
                packages.add(LocationModule(reactContext)) // Adicione o LocationModule aqui
                return packages
            }

            override fun getJSMainModuleName(): String = "index"

            override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG
        }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)

        // Inicie o serviço de localização em segundo plano
        startLocationService()
    }

    private fun startLocationService() {
        val serviceIntent = Intent(this, LocationService::class.java)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            // Inicie o serviço de maneira que ele continue em segundo plano mesmo que o aplicativo seja fechado
            startForegroundService(serviceIntent)
        } else {
            startService(serviceIntent)
        }
    }
}