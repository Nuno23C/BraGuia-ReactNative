package com.braguiarn.location

import android.Manifest
import android.annotation.SuppressLint
import android.app.Notification
import android.app.Service
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.location.Location
import android.location.LocationListener
import android.location.LocationManager
import android.os.Build
import android.os.Bundle
import android.os.IBinder
import androidx.core.app.ActivityCompat
import androidx.core.app.NotificationCompat
import com.braguiarn.R

class LocationService : Service() {

    private var locationManager: LocationManager? = null
    private var locationListener: LocationListener? = null

    override fun onBind(intent: Intent?): IBinder? {
        return null
    }

    override fun onCreate() {
        super.onCreate()
        locationManager = getSystemService(Context.LOCATION_SERVICE) as LocationManager
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        startForegroundService()
        return START_STICKY
    }

    override fun onDestroy() {
        super.onDestroy()
        stopForegroundService()
    }

    @SuppressLint("MissingPermission")
    private fun startForegroundService() {
        val channelId =
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                createNotificationChannel("my_service", "My Background Service")
            } else {
                ""
            }

        val notification: Notification = NotificationCompat.Builder(this, channelId)
            .setContentTitle("My Background Service")
            .setContentText("Running")
            .setSmallIcon(R.mipmap.ic_launcher)
            .build()

        startForeground(1, notification)

        locationListener = object : LocationListener {
            override fun onLocationChanged(location: Location) {
                // Implemente o que fazer quando a localização muda
            }

            override fun onProviderEnabled(provider: String) {}
            override fun onProviderDisabled(provider: String) {}
            override fun onStatusChanged(provider: String?, status: Int, extras: Bundle?) {}
        }

        // Ativa a obtenção de localização
        if (ActivityCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_FINE_LOCATION
            ) == PackageManager.PERMISSION_GRANTED
        ) {
            locationManager?.requestLocationUpdates(
                LocationManager.GPS_PROVIDER,
                1000,
                0f,
                locationListener!!
            )
        }
    }

    private fun stopForegroundService() {
        locationManager?.removeUpdates(locationListener!!)
        stopForeground(true)
        stopSelf()
    }

    // Cria um canal de notificação para versões do Android Oreo e superiores
    private fun createNotificationChannel(channelId: String, channelName: String): String {
        // Implementação para criar canal de notificação
        return ""
    }
}