function pgCanvas1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}
function showDlgCanvasInfo() {
    Dialogs.dlgCanvasInfo.show();
}
function pgCanvas1_Self_OnShow(e) {
    var title = lang.pgCanvas1;
    if (Device.deviceOS == "Android") {
        header.init(this, canvasHeader, canvasStatusBarColor, title);
        header.setLeftItem(homeBack);
    } else {
        header.init(this, canvasHeader, canvasStatusBarColor, title);
        header.setLeftItem(homeBack);
        header.setRightItem(showDlgCanvasInfo);
    }
}
function pgCanvas1_contLineGraph1_OnTouchEnded(e) {
    if (Device.connectionType == 0) {
        alert(lang.networkError);
    } else {
        load("http://services.smartface.io/Resource/DefinitionsForCanvas.js");
        if (Device.deviceOS == "Android") {
            header.init(Pages.pgCanvas2, canvasHeader, canvasStatusBarColor, lang.lineGraph1);
            header.setLeftItem(pagesBack);
            header.setRightItem(Dialogs.dlgCanvasLineInfo);
        }
        Pages.pgCanvas2.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
        SES.Analytics.eventLog("Show LineGraph1", '{\"function\":\"pgCanvas1_contLineGraph1_OnTouch\"}');
    }
}
function pgCanvas1_contLineGraph2_OnTouchEnded(e) {
    if (Device.connectionType == 0) {
        alert(lang.networkError);
    } else {
        load("http://services.smartface.io/Resource/DefinitionsForCanvas.js");
        if (Device.deviceOS == "Android") {
            header.init(Pages.pgCanvas3, canvasHeader, canvasStatusBarColor, lang.lineGraph2);
            header.setLeftItem(pagesBack);
            header.setRightItem(Dialogs.dlgCanvasLineInfo);
        }
        Pages.pgCanvas3.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
        SES.Analytics.eventLog("Show LineGraph2", '{\"function\":\"pgCanvas1_contLineGraph2_OnTouch\"}');
    }
}
function pgCanvas1_contCounter_OnTouchEnded(e) {
    if (Device.deviceOS == "Android") {
        header.init(Pages.pgCanvas4, canvasHeader, canvasStatusBarColor, lang.counter);
        header.setLeftItem(pagesBack);
        header.setRightItem(Dialogs.dlgCanvasCounterInfo);
    }
    Pages.pgCanvas4.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
    SES.Analytics.eventLog("Show Counter Graph", '{\"function\":\"pgCanvas1_contCounter_OnTouch\"}');
}
function pgCanvas1_contBarGraph_OnTouchEnded(e) {
    if (Device.deviceOS == "Android") {
        header.init(Pages.pgCanvas5, canvasHeader, canvasStatusBarColor, lang.barGraph);
        header.setLeftItem(pagesBack);
        header.setRightItem(Dialogs.dlgCanvasLineInfo);
    }
    Pages.pgCanvas5.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
    SES.Analytics.eventLog("Show Bar Graph", '{\"function\":\"pgCanvas1_contBarGraph2_OnTouch\"}');
}