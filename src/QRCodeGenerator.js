#import 'QRCode.js'


var QRCodeGenerator = (function() {

    var obj = {};

    obj.QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 };

    obj.generateQRCode = function(ecLevel) {
        var text = [doc askForUserInput:"Enter URL or text" initialValue:"http://www.turbobabr.com/"];

        var qrcode = new QRCode(
            {
                correctLevel: ecLevel
            }
        );
        var error=qrcode.drawCode([text UTF8String]);
        if(error) {
            // todo: error handling goes here.
        }
    };

    return obj;
}());