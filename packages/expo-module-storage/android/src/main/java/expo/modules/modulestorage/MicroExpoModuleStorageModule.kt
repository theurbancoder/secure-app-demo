package expo.modules.modulestorage

import com.theurbancoder.kotlin.secore.core.SecureCore
import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.CodedException
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class MicroExpoModuleStorageModule : Module(), KoinComponent {

  val secureCore : SecureCore by inject<SecureCore>()

  override fun definition() = ModuleDefinition {
    Name("MicroExpoModuleStorage")
    AsyncFunction("setValue") { key: String, value: String, promise: Promise ->
      try {
        promise.resolve(secureCore.storeValue(key, value))
      } catch (e: CodedException) {
        promise.reject(e)
      }
    }
    AsyncFunction("getValue") { key: String, promise: Promise ->
      try {
        promise.resolve(secureCore.getValue(key))
      } catch (e: CodedException) {
        promise.reject(e)
      }
    }
    AsyncFunction("clearValue") { key: String, promise: Promise ->
      try {
        promise.resolve(secureCore.clearValue(key))
      } catch (e: CodedException) {
        promise.reject(e)
      }
    }
  }
}
