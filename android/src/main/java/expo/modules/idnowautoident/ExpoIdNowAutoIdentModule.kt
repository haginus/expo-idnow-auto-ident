package expo.modules.idnowautoident

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL
import android.content.Context
import android.content.Intent
import de.idnow.core.IDnowConfig
import de.idnow.core.IDnowSDK

class ExpoIdNowAutoIdentModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoIdNowAutoIdent')` in JavaScript.
    Name("ExpoIdNowAutoIdent")

    Function("startIdentification") { token: String ->
      val context: Context? = appContext.reactContext?.applicationContext
      val intent = Intent(context, IDNowStartActivity::class.java)
      intent.putExtra("token", token)
      intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      context?.startActivity(intent)
      return@Function "system"

    }

  }
}
