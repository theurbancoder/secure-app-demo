package expo.modules.microexpomodulesecurecore

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class SecureCoreModule : Module(), KoinComponent {
  val secureCore : SecureCore by inject<SecureCore>()

  override fun definition() = ModuleDefinition {
    Name("SecureCore")
    Constants(constants)
    Events("onSecureCoreStateChange")
    AsyncFunction("authenticate", @SecureCoreModule::authenticate)
  }

  private val constants: Pair<String, Any?> = (
    "isAuthenticated" to secureCore.getAuthenticationState()
  )

  private fun authenticate() {
    secureCore.authetenticate()
    sendEvent("onSecureCoreStateChange", mapOf(
      "isAuthenticated" to secureCore.getAuthenticationState()
    ))
  }
}
