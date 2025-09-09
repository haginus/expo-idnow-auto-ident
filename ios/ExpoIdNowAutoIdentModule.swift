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

    Function("startIdentification") { (token: String) -> String in
      DispatchQueue.main.async {
        let currentViewController = RCTPresentedViewController()
  
        IDNowSDK.shared.start(token: token, fromViewController: currentViewController!, listener:{[weak self] (result: IDNowSDK.IdentResult.type, statusCode: IDNowSDK.IdentResult.statusCode, message: String) in
          print ("SDK finished")
          if result == .ERROR {
              let localMessage = NSLocalizedString("idnow.platform.error.generic", comment: "").replacingOccurrences(of: "{errorCode}", with: statusCode.description)
              print(localMessage)
              
          } else if result == .FINISHED {
          }
        })
      }
      return message
    }
  }
}
