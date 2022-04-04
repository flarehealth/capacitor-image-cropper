import Foundation
import Capacitor
import CropViewController

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorImageCropperPlugin)
public class CapacitorImageCropperPlugin: CAPPlugin, CropViewControllerDelegate  {
    private var call: CAPPluginCall?

    @objc func crop(_ call: CAPPluginCall) {
        self.call = call
        
        guard let src = call.options["uri"] as? String else {
            call.reject("Must provide a file URI")
            return
          }
        
        DispatchQueue.main.async {
            self.presentCropViewController(imgSrc: src)
        }
    }
    
    func presentCropViewController(imgSrc: String) {
        
        let data = try? Data(contentsOf: URL(string: imgSrc)!)
        let cropViewController = CropViewController(image: UIImage(data: data!)!)
        
        // Set CropViewController options
        cropViewController.aspectRatioLockEnabled = false
        cropViewController.toolbarPosition = TOCropViewControllerToolbarPosition.top
        cropViewController.customAspectRatio = CGSize(width: 7.0, height: 4.0)
        cropViewController.aspectRatioPickerButtonHidden = true
        cropViewController.resetAspectRatioEnabled = false
        
        cropViewController.delegate = self
        bridge?.viewController?.present(cropViewController, animated: true, completion: nil)
    }
    
    /*
     Cropping is complete, and cropped image is `image` argument
     */
    public func cropViewController(_ cropViewController: CropViewController, didCropToImage image: UIImage, withRect cropRect: CGRect, angle: Int) {
        cropViewController.dismiss(animated: true)
        let path = URL.init(fileURLWithPath: FileManager.default.temporaryDirectory.path + "/" + NSUUID().uuidString + ".jpg")
        do {
            try image.jpegData(compressionQuality: 0.60)?.write(to: path, options: Data.WritingOptions.atomic)
        }
        catch let e {
            call?.reject(e.localizedDescription)
        }
        
        var object = JSObject()
        object["imgPath"] = path.absoluteString
        call?.resolve(object)
    }
    
    /*
     Handler is called when user hits "Cancel" before finishing cropping
     */
    public func cropViewController(_ cropViewController: CropViewController, didFinishCancelled cancelled: Bool) {
        if (cancelled == true) {
            cropViewController.dismiss(animated: true, completion: nil)
            call?.reject("Cancelled cropping, exiting cropping view.")
        }
    }
}
