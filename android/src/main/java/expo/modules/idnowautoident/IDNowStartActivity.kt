package expo.modules.idnowautoident

import android.app.Activity
import android.os.Bundle
import android.widget.Toast
import de.idnow.core.IDnowConfig
import de.idnow.core.IDnowResult
import de.idnow.core.IDnowSDK
import expo.modules.kotlin.Promise

class IDNowActivity : Activity(), IDnowSDK.IDnowResultListener {

  companion object {
    var currentPromise: Promise? = null
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    val token: String = intent.getStringExtra("token") ?: ""
    val language: String = intent.getStringExtra("language") ?: "en"

    val idnowConfig = IDnowConfig.Builder.getInstance().withLanguage(language).build()

    val sdk = IDnowSDK.getInstance()
    sdk.initialize(this, idnowConfig)
    sdk.startIdent(token.uppercase(), this)
  }

  override fun onIdentResult(result: IDnowResult) {
    val mapResult =
      when (result.resultType) {
        IDnowResult.ResultType.FINISHED -> mapOf("type" to "finished")
        IDnowResult.ResultType.CANCELLED -> mapOf("type" to "cancelled")
        IDnowResult.ResultType.ERROR -> mapOf("type" to "error", "errorCode" to result.statusCode)
      }

    currentPromise?.resolve(mapResult)
    currentPromise = null

    finish()
  }
}
