package com.theurbancoder.kotlin.secore.core

interface SecureCoreInterface {
    fun authetenticate()
    fun clearAuthentication()
    fun getAuthenticationState(): Boolean
    fun storeValue(key: String, value: String)
    fun getValue(key: String): String?
    fun clearValue(key: String)
    fun fetch(url: String): String
}