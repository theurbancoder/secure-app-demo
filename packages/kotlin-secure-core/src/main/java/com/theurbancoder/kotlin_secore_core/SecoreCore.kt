package com.theurbancoder.kotlin.secore.core

import java.net.URL

class SecureCore: SecureCoreInterface {
    private var isAuthenticated: Boolean = false
    private val storage = mutableMapOf<String, String>()

    override fun authetenticate() {
        isAuthenticated  = true
    }

    override  fun clearAuthentication() {
        isAuthenticated = false
    }

    override fun getAuthenticationState(): Boolean {
        return isAuthenticated
    }

    override fun storeValue(key: String, value: String) {
        if (!isAuthenticated) {
            throw Error("Unauthenticated access")
        }
        storage[key] = value
    }

    override fun getValue(key: String): String? {
        if (!isAuthenticated) {
            throw Error("Unauthenticated access")
        }
        return storage[key]
    }

    override fun clearValue(key: String) {
        if (!isAuthenticated) {
            throw Error("Unauthenticated access")
        }
        storage.remove(key)
    }

    override fun fetch(url: String): String {
        if (!isAuthenticated) {
            throw Error("Unauthenticated access")
        }
        return URL(url).readText()
    }
}