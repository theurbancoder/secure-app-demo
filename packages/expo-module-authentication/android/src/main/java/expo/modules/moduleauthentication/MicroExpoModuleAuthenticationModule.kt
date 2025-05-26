package expo.modules.moduleauthentication

import com.theurbancoder.kotlin.secore.core.SecureCore
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class MicroExpoModuleAuthenticationModule : Module(), KoinComponent {
  val secureCore : SecureCore by inject<SecureCore>()

  override fun definition() = ModuleDefinition {
    Name("MicroExpoModuleAuthentication")
    Constants((
            "isAuthenticated" to secureCore.getAuthenticationState()
            ))
    Events("onSecureCoreStateChange")
    AsyncFunction("authenticate", {
      secureCore.authetenticate()
      sendEvent("onSecureCoreStateChange", mapOf(
        "isAuthenticated" to secureCore.getAuthenticationState()
      ))
    })
  }

//  private val constants: Pair<String, Any?> = (
//    "isAuthenticated" to secureCore.getAuthenticationState()
//  )

}
