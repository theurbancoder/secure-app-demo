package expo.modules.moduleauthentication

import android.content.Intent
import com.theurbancoder.kotlin.secore.core.SecureCore
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

const val AUTH_ACTIVITY_REQUEST_CODE = 150

class MicroExpoModuleAuthenticationModule : Module(), KoinComponent {
    val secureCore: SecureCore by inject<SecureCore>()

    override fun definition() = ModuleDefinition {
        Name("MicroExpoModuleAuthentication")
        Constants("isAuthenticated" to secureCore.getAuthenticationState())
        Events("onSecureCoreStateChange")
        AsyncFunction("authenticate") { ->
            showFullScreenModal()

        }
        OnActivityResult { activity, payload ->
            sendEvent(
                "onSecureCoreStateChange", mapOf(
                    "isAuthenticated" to true
                )
            )
        }
    }

    fun showFullScreenModal() {
        val context = appContext.reactContext
        val intent = Intent(context, AuthActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK
        }
        appContext.throwingActivity.startActivityForResult(intent, AUTH_ACTIVITY_REQUEST_CODE)
        appContext.throwingActivity.overridePendingTransition(R.anim.fade_in, R.anim.fade_out)
    }
}
