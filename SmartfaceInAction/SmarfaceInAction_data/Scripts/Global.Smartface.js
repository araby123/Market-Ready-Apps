var firstRunListWebclient = true; // a flag for checking run webclient
var fromLogin; // a flag for control come from which page
var countTwitter = 20; // default value
var twitterWebClient; //webClient object for fetching server response
var isAnimateUp = false; // a flag for control animate tweet1 in pgDashboard
var resObjGetTwitter; // response of wcTwitter webclient
var url = "twitter://twitter.com"; // base url of wcTwitter webClient
var canOpen; // a flag , controlling device has twitter application
var newsArray; // response of webclient11
var newsArrayList; // response of webclientList
var controlAddingCanvas = null;
var index; //used in various places to keeping temporary index for data
var intervalId; //for keeping task ID used in setTimeout

var myCurrentLat; // latitude value of user location address
var myCurrentLon; // longtitude value of user location address

var lineStyleNewsScrollViews; // array , holding 3 scrollview path in pgLineStyle
var lineStyleNewsLblHeights; // array , holding 3 scrollview height in pgLineStyle
var lineStyleNewsScrollViewsContentHeights; // holding 3 scrollview content height in pgLineStyle

var boxedStyleNewsScrollViews; // array , holding 3 scrollview path in pgBoxedStyle
var boxedStyleNewsLblHeights; // array , holding 3 scrollview height in pgBoxedStyle
var boxedStyleNewsScrollViewsContentHeights; // holding 3 scrollview content height in pgBoxedStyle

var squareStyleNewsScrollViews; // array , holding 3 scrollview path in pgSquareStyle
var squareStyleNewsLblHeights; // array , holding 3 scrollview height in pgSquareStyle
var squareStyleNewsScrollViewsContentHeights; // holding 3 scrollview content height in pgSquareStyle


var rowNum = 11; // default value.it is using on setting url of webclientList
var pageNum = 1; // default value.it is using on setting url of webclientList

/**************************************************************************************/
var lblBoxed;
var imgBoxedAc;
var imgBoxed;
var rBox;
/**************************************************************************************/

function Global_Events_OnStart(e) {
    Device.setGPSStatus(true); // to find user location

    // Smartface
    SES.Configuration.useAnalytics = true;
    SES.Configuration.logEnabled = true;

    Data.DS_twitterTable.clear();
    Data.notify("Data.DS_twitterTable");
    countTwitter = 20;
    SMF.Net.wcTwitter.URL = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=" + countTwitter + "&screen_name=smartface_io";
    SMF.Net.wcTwitter.run(true);

    /**************************************************************************************/
    rBox = new SMF.UI.RepeatBox({
            width : "100%",
            height : "91.93%",
            left : 0,
            top : "8.07%",
            dataSource : Data.wcSquareView_OutDSetnews,
            useActiveItem : false,
            showScrollbar : false,
            visible : false,
            fillColor : "#FFFFFF",
            enablePullUpToRefresh : false,
            enablePullUpToRefresh : false
        });
    var rHeight = Device.screenHeight / 5;
    rBox.itemTemplate.height = rHeight;
    rBox.onRowRender = onRowRender;
    rBox.onSelectedItem = onSelectedItem;

    imgBoxed = new SMF.UI.Image({
            width : "100%",
            height : "100%",
            left : 0,
            top : "0%",
            touchEnabled : false,
            image : "empty_photo.png",
            imageFillType : "stretch"
        });

    imgBoxedAc = new SMF.UI.Image({
            width : "100%",
            height : "100%",
            left : 0,
            top : "0%",
            image : "empty_photo.png",
            imageFillType : "stretch"
        });
    lblBoxed = new SMF.UI.Label({
            width : "93.54%",
            height : "29.95%",
            left : "5.42%",
            touchEnabled : false,
            fontColor : "white",
            top : "67.92%"
        });
    var lblFont = new SMF.UI.Font({
            name : "Default",
            size : "7pt",
            bold : false,
            italic : false
        });
    lblBoxed.font = lblFont; 
    imgBoxed.cacheEnabled = true;
    rBox.itemTemplate.add(imgBoxed);
    rBox.itemTemplate.add(lblBoxed);
    Pages.pgListView.add(rBox);

    // rBox.itemTemplate.add(imgBoxedAc);

    /**************************************************************************************/
    load("http://services.smartface.io/Resource/DefinitionsForCanvas.js");
    // load("DefinitionsForCanvas.js");
    load("MethodsForCanvas.js");
    load("MapDefs.js");
    load("DefinitionsofForm.js");
    load("WebClientsofForm.js");
    load("MethodsForListView.js");
    load("Header.js");
    load("DefinitionsOfNews.js");

    /**************************************************************************************/

}
function onSelectedItem(e) {
    Pages.pgBoxedStyle.svNewsContentPager.scrollX = Device.screenWidth * e.rowIndex;
    var startingIndex;
    if (e.rowIndex > 0 && e.rowIndex < newsArray.length - 1) {
        startingIndex = e.rowIndex - 1;
        boxedStyleNewsScrollViews[0].left = Device.screenWidth * (e.rowIndex - 1);
        boxedStyleNewsScrollViews[1].left = Device.screenWidth * e.rowIndex;
        boxedStyleNewsScrollViews[2].left = Device.screenWidth * (e.rowIndex + 1);
    } else if (e.rowIndex == 0) {
        startingIndex = e.rowIndex;
        boxedStyleNewsScrollViews[0].left = Device.screenWidth * e.rowIndex;
        boxedStyleNewsScrollViews[1].left = Device.screenWidth * e.rowIndex + 1;
        boxedStyleNewsScrollViews[2].left = Device.screenWidth * e.rowIndex + 2;
    } else {
        startingIndex = e.rowIndex - 2;
        boxedStyleNewsScrollViews[0].left = Device.screenWidth * (e.rowIndex - 2);
        boxedStyleNewsScrollViews[1].left = Device.screenWidth * (e.rowIndex - 1);
        boxedStyleNewsScrollViews[2].left = Device.screenWidth * e.rowIndex;
    }
    fillDataToBoxedStyledScrollViews(startingIndex);
    // setting Android ActionBar
    if (Device.deviceOS == "Android") {
        header.init(Pages.pgBoxedStyle, listHeader, listStatusbarColor, "Boxed Content");
        header.setLeftItem(pagesBack);
        header.setRightItem(Dialogs.dlgBoxedInfo);
    }
    Pages.pgBoxedStyle.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
function onRowRender(e) {
    Data.wcSquareView_OutDSetnews.seek(e.rowIndex);
    var index = e.rowIndex;
    imgBoxed.changeAnimation = "None";
    imgBoxed.image = "empty_photo.png";
    imgBoxed.changeAnimation = "fade";
    lblBoxed.text = newsArray[index].title;
    imgBoxed.image = newsArray[index].image[0].url;
}

function pagesBack(e) {
    Pages.back();
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var lastNetworkErrorDisplayTime = new Date();
function Global_Events_OnError(e) {
    Dialogs.dlgHomePgLoading.close();
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        var requiredTimeDiff = 3000;
        var currentTime = new Date(Number(new Date()) + requiredTimeDiff);
        var timeGap = currentTime - lastNetworkErrorDisplayTime;
        if (timeGap > requiredTimeDiff) { //checks for time gap for displaying network error alers; for not frequent displaying the alerts.
            alert(lang.networkError);
            lastNetworkErrorDisplayTime = currentTime;
        }
        break;
    default:
        SES.Analytics.eventLog("error", JSON.stringify(e));
        var err = JSON.parse(JSON.stringify(e));
        err.message = e.message;
        alert(JSON.stringify(err));
        break;
    }
}
function Global_Events_OnLocationChanged(e) {
    myCurrentLat = e.lat;
    myCurrentLon = e.lng;
    SMF.Map.lookupAddress(Number(myCurrentLat), Number(myCurrentLon),
        function (e) {
        address = e.results[0].addressValue;
        Pages.pgRegister.scrollMainRegister.contUserInfo3.lblAddress.text = address;
        isAddressFound = true;
    },
        function (e) {});
}
function showdlgCanvasLineInfo() {
    Dialogs.dlgCanvasLineInfo.show();
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// is used in multiple places to go to the main (dashboard) page
function homeBack() {
    Pages.pgDashboard.show(SMF.UI.MotionEase.accelerating,
        SMF.UI.TransitionEffect.leftToRight,
        SMF.UI.TransitionEffectType.push,
        false,
        false);
}