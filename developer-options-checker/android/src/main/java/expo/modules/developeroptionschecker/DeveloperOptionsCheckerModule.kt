package expo.modules.developeroptionschecker

import android.provider.Settings
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class DeveloperOptionsCheckerModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("DeveloperOptionsChecker")

    Function("isDeveloperOptionsEnabled") {
      val context = appContext.reactContext ?: return@Function false

      val devOptionsEnabled = Settings.Secure.getInt(
        context.contentResolver,
        Settings.Global.DEVELOPMENT_SETTINGS_ENABLED, 0
      ) == 1

      return@Function devOptionsEnabled
    }
  }
}
