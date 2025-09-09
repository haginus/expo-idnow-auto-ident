package expo.modules.idnowautoident

import android.content.Context
import android.content.Intent
import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoIdNowAutoIdentModule : Module() {

  override fun definition() = ModuleDefinition {
    Name("ExpoIdNowAutoIdent")

    // Async function that returns a promise to JS
    AsyncFunction("startIdentification") { token: String, language: String?, promise: Promise ->
      val context: Context =
              appContext.reactContext?.applicationContext
                      ?: throw Exception("Context not available")

      // Store the promise in the Activity companion object
      IDNowActivity.currentPromise = promise

      val intent =
              Intent(context, IDNowActivity::class.java).apply {
                putExtra("token", token)
                putExtra("language", language ?: "en")
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
              }

      context.startActivity(intent)
    }
  }
}
