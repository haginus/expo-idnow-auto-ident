import ExpoModulesCore
import IDNowSDKCore
import UIKit
import React

public class ExpoIdNowAutoIdentModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoIdNowAutoIdent')` in JavaScript.
    Name("ExpoIdNowAutoIdent")

    AsyncFunction("startIdentification") { (token: String, preferredLanguage: String, promise: Promise) in
      let currentVC = RCTPresentedViewController() 

      IDNowSDK.shared.start(
        token: token,
        preferredLanguage: preferredLanguage,
        fromViewController: currentVC!
      ) { result, statusCode, message in
        if result == .ERROR {
          promise.resolve([
            "type": "error",
            "errorCode": statusCode.description
          ])
        } else if result == .FINISHED {
          promise.resolve([
            "type": "finished"
          ])
        } else if result == .CANCELLED {
          promise.resolve([
            "type": "cancelled"
          ])
        } else {
          // Handle other result cases if SDK provides them
          promise.reject("UNKNOWN_RESULT", "Unhandled result type: \(result)")
        }
      }
    }
  }
}
