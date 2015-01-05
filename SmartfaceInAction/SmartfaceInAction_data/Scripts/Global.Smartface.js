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
var isFromEdit = false;
var noteIndex = 0;
var noteToBeReplaced = '';
var shareListViewNews = {
    news : []
}; //holding responseObject to share news

//onFirstStart Notification Controller
var ofsNotCtrl = false;
//local notifications
var secili = 0;
var selectedIndex = secili;
var myNot = [];

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

//Admob for once each page as pgBlog and Page2(Dynamic)
var firstRun = true;
var page2FirstRun = true;
//shareUrl
var urlShare = "";
//timeouts for swipeDelete
var timeoutRow;

//inActionObjectDefinitions
var lblBoxed;
var imgBoxedAc;
var imgBoxed;
var rBox;
//pgProfileCropFunction
var fromProfile = false;

//Keeps choosing date
var sDateGlobal;
function Global_Events_OnStart(e) {
    Device.setGPSStatus(true); // to find user location

    // Smartface
    SES.Configuration.useAnalytics = true;
    SES.Configuration.logEnabled = true;

    /*******************************************************Social***************************************/
    load("HeaderBar.js");
    load("SocialGlobal.js");
    load("BC.js");
    headerSocial = new HeaderBar1();
    createDialog();
    createDataObject();
    createPage1UIObject();
    createPage2UIObject();
    createCategoriesDlg();

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
    var rHeight = Device.screenHeight / 2.70;
    rBox.itemTemplate.height = rHeight;
    rBox.onRowRender = onRowRender;
    rBox.onSelectedItem = onSelectedItem;

    imgBoxed = new SMF.UI.Image({
            width : "100%",
            height : "100%",
            left : 0,
            top : "0%",
            touchEnabled : false,
            //image : "empty_photo.png",
            imageFillType : SMF.UI.ImageFillType.stretch
        });

    imgBoxedAc = new SMF.UI.Image({
            width : "100%",
            height : "100%",
            left : 0,
            top : "0%",
            image : "empty_photo.png",
            imageFillType : SMF.UI.ImageFillType.stretch
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
    imgBoxed.enableCache = true;
    rBox.itemTemplate.add(imgBoxed);
    rBox.itemTemplate.add(lblBoxed);
    Pages.pgListView.add(rBox);

    // rBox.itemTemplate.add(imgBoxedAc);

    /**************************************************************************************/

    //loading personal js file
    load("MethodsForCanvas.js");
    load("MapDefs.js");
    load("DefinitionsofForm.js");
    load("WebClientsofForm.js");
    load("MethodsForListView.js");
    load("Header.js");
    load("DefinitionsOfNews.js");

    /**************************************************************************************/
}
//creating dynamic dataSet and webClient for pgBlog
function createDataObject() {
    Data.execute("DROP TABLE IF EXISTS testtable;");
    Data.execute("Create table testtable (col1 int)");
    // creating dataset for bind repeatbox
    Data.dynamicDS = new Data.Dataset({
            selectQuery : "select * from testtable"
        });
    Data.dynamicDS.refresh();
    blogWebClient = new SMF.Net.WebClient(); // webClient object for fetching server response
    blogWebClient.url = "http://www.smartface.io/?json=1&count=10&page=1&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields"; // assign url to webclient object
    blogWebClient.httpMethod = "GET"; // assign method type
    blogWebClient.requestHeaders = ["Content-Type: application/json"]; // adding requestHeader
    blogWebClient.ignoreSSLErros = true; //for not breaking the connection on SSL erros
    blogWebClient.run();
    blogWebClient.onSyndicationSuccess = onSyndicationSuccessBlog;
    blogWebClient.timeoutInterval = 20;
}
//behaviour while select one of the boxed item
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
        header.init(Pages.pgBoxedStyle, listHeader, listStatusbarColor, lang.pgBoxedStyleTitle);
        header.setLeftItem(pagesBack);
        header.setRightItem(Dialogs.dlgBoxedInfo);
    }
    Pages.pgBoxedStyle.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
//assigning title, image to pgSquareView's repeatBox
function onRowRender(e) {
    Data.wcSquareView_OutDSetnews.seek(e.rowIndex);
    var index = e.rowIndex;
    imgBoxed.changeAnimation = "None";
    imgBoxed.image = "empty_photo.png";
    imgBoxed.changeAnimation = "fade";
    lblBoxed.text = newsArray[index].title;
    imgBoxed.image = newsArray[index].image[0].url;
}
//global back function
function pagesBack(e) {
    Pages.back();
}
//validating given mail is proper or not
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//var lastNetworkErrorDisplayTime = new Date();
//all errors give specific alert like Server, Network, sizeOverflow, js syntax etc.
function Global_Events_OnError(e) {
    Dialogs.dlgHomePgLoading.close();
    dlg.close();
    clearInterval(intervalID);
    rBoxBlog.closePullItems();
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        /* var requiredTimeDiff = 3000;
        var currentTime = new Date(Number(new Date()) + requiredTimeDiff);
        var timeGap = currentTime - lastNetworkErrorDisplayTime;
        if (timeGap > requiredTimeDiff) { *///checks for time gap for displaying network error alers; for not frequent displaying the alerts.
        alert(lang.networkError);
        // lastNetworkErrorDisplayTime = currentTime;
        // }
        Dialogs.dlgHomePgLoading.close();
        dlg.close();
        clearInterval(intervalID);
        rBoxBlog.closePullItems();
        break;
    default:
        SES.Analytics.eventLog("error", JSON.stringify(e));
        var err = JSON.parse(JSON.stringify(e));
        err.message = e.message;
        // if you want to see JS error on runtime
        alert(JSON.stringify(err));
        Dialogs.dlgHomePgLoading.close();
        break;
    }
}
var findLocate = true;
//take user's location while changing
function Global_Events_OnLocationChanged(e) {
    if (findLocate) {
        myCurrentLat = e.lat;
        myCurrentLon = e.lng;
        SMF.Map.lookupAddress(Number(myCurrentLat), Number(myCurrentLon),
            function (e) {
            address = e.results[0].addressValue;
            Pages.pgRegister.scrollMainRegister.contUserInfo3.lblAddress.text = address;
            isAddressFound = true;
        },
            function (e) {});
        findLocate = false;
    }
    //After taking longitude, latitude Close gps to save battery
    Device.setGPSStatus(0);
}
function showdlgCanvasLineInfo() {
    Dialogs.dlgCanvasLineInfo.show();
}

// is used in multiple places to go to the main (dashboard) page
function homeBack() {
    Pages.back(Pages.pgDashboard);
}
function Global_Events_OnConnectionTypeChanged(e) {
    if (Device.connectionType == 0) {
        dlg.close();
        clearInterval(intervalID);
        rBoxBlog.closePullItems();
    }
}
//to keep images from profile and register
var imageFileProfile;
var imageFileRegister;
// checking image is changed or not
var didImageChanged = false;
function takeCropImage(isFromCapture) {
    if (isFromCapture) {
        SMF.Multimedia.startCamera({
            cameraType : 0,
            resolution : 2,
            autoFocus : true,
            onStart : function () {},
            onCapture : function (e) {
                SMF.UI.cropImage({
                    imageUri : e.photoUri,
                    options : {
                        aspectX : 1,
                        aspectY : 1,
                        outputX : 500,
                        outputY : 500,
                    },
                    onSuccess : function (e) {
                        var ph_width = e.width;
                        var ph_height = e.height;
                        var im = new SMF.Image({
                                imageUri : e.imageUri,
                                onSuccess : function (e) {
                                    im.resize({
                                        width : ph_width,
                                        height : ph_height,
                                        format : SMF.ImageFormat.PNG,
                                        onSuccess : function (e) {
                                            didImageChanged = true;
                                            if (fromProfile) {
                                                Pages.pgProfile.scrollMainProfile.contUserInfo1.cntProfile.imgProfile.image = e.image;
                                                if (Device.deviceOS == "Android") {
                                                    imageFileProfile = new SMF.IO.File(e.image);
                                                } else {
                                                    imageFileProfile = new SMF.IO.File(SMF.IO.applicationDataDirectory, e.image);
                                                }
                                            } else {
                                                Pages.pgRegister.scrollMainRegister.contUserInfo1.cntProfile.imgProfile.image = e.image;
                                                if (Device.deviceOS == "Android") {
                                                    imageFileRegister = new SMF.IO.File(e.image);
                                                } else {
                                                    imageFileRegister = new SMF.IO.File(SMF.IO.applicationDataDirectory, e.image);
                                                }
                                            }
                                        },
                                        onError : function (e) {
                                            alert("Error: " + e.message);
                                        }
                                    });
                                },
                                onError : function (e) {
                                    alert("Error: " + e.message);
                                }
                            });
                    },
                    onError : function (e) {
                        alert("Error: " + e.message);
                    },
                    onCancel : function (e) {}
                });
            },
            onCancel : function () {},
            onFailure : function () {}
        });
    } else {
        Device.Media.pickFromGallery({
            type : [SMF.MediaType.image],
            onSuccess : function (e) {
                SMF.UI.cropImage({
                    imageUri : e.file,
                    options : {
                        aspectX : 1,
                        aspectY : 1,
                        outputX : 500,
                        outputY : 500,
                    },
                    onSuccess : function (e) {
                        var ph_width = e.width;
                        var ph_height = e.height;
                        var img = new SMF.Image({
                                imageUri : e.imageUri,
                                onSuccess : function (e) {
                                    img.resize({
                                        width : ph_width,
                                        height : ph_height,
                                        format : SMF.ImageFormat.PNG,
                                        onSuccess : function (e) {
                                            didImageChanged = true;
                                            if (fromProfile) {
                                                Pages.pgProfile.scrollMainProfile.contUserInfo1.cntProfile.imgProfile.image = e.image;
                                                if (Device.deviceOS == "Android") {
                                                    imageFileProfile = new SMF.IO.File(e.image);
                                                } else {
                                                    imageFileProfile = new SMF.IO.File(SMF.IO.applicationDataDirectory, e.image);
                                                }
                                            } else {
                                                Pages.pgRegister.scrollMainRegister.contUserInfo1.cntProfile.imgProfile.image = e.image;
                                                if (Device.deviceOS == "Android") {
                                                    imageFileRegister = new SMF.IO.File(e.image);
                                                } else {
                                                    imageFileRegister = new SMF.IO.File(SMF.IO.applicationDataDirectory, e.image);
                                                }
                                            }
                                        },
                                        onError : function (e) {
                                            alert("Error: " + e.message);
                                        }
                                    });
                                },
                                onError : function (e) {
                                    alert("Error: " + e.message);
                                }
                            });
                    },
                    onError : function (e) {
                        alert("Error: " + e.message);
                    },
                    onCancel : function (e) {}
                });
            },
            onCancel : function (e) {},
            onError : function (e) {
                alert(lang.applicationError);
            }
        });
    }
}

//local notification
var localNotification1;
var localNotification2;
//since android and ios required different parameters for local notification
var isAndroid = false;
function localNotification() {
    if (Device.deviceOS == 'iOS') {
        isAndroid = false;
        localNotification1 = new Notifications.LocalNotification({
                fireDate : new Date(),
                alertBody : lang.notificationMsg,
                launchImage : "icon.png",
                userInfo : {
                    "key" : "value"
                },
                applicationIconBadgeNumber : Application.applicationIconBadgeNumber + 1,
                hasAction : true,
                repeatInterval : notTime,
                onReceivedNotification : function (e) {
                    alert(lang.notificationMsg);
                }
            });
    } else {
        isAndroid = true;
        localNotification2 = new Notifications.LocalNotification({
                fireDate : new Date(),
                alertTitle : "Smartface", // Android only
                alertBody : lang.notificationMsg,
                userInfo : {
                    "key" : "value"
                },
                launchImage : "icon.png",
                //sound:"notifsound.mp3",
                smallIcon : "icon.png", // Android only
                autoCancel : true, // Android only
                number : 1, // Android only
                when : new Date(),
                usesChronometer : false,
                subText : lang.notificationSubtext,
                priority : 1,
                id : 001,
                repeatInterval : notTime,
            });
    }
}
//disable local notification
function disableNotification() {
    if (Device.deviceOS == 'iOS') {
        Notifications.local.cancelNotification(localNotification1);
        Notifications.local.applicationIconBadgeNumber = 0;
        /* var not = Notifications.local.scheduledNotifications();
        var i;
        for (i = 0; i < not.length; i++)
        Notifications.local.cancelNotification(not[i]);*/
    } else {
        Notifications.local.cancelNotification(localNotification2);
    }
    alert(lang.notificationCancel);

}

//if you want to give alert inApp as notification
function Global_Events_OnReceivedNotification(e) {
    //alert(lang.notificationMsg);
}

function notPicker(_isAndroid) {
    //local notifications picker items
    myNot = [lang.notificationDay, lang.notificationWeek, lang.notificationMonth];
    pick(
        myNot,
        selectedIndex,
        function (e) {
        selectedIndex = e.index;
        //OnceADay
        if (selectedIndex == 0) {
            notTime = Notifications.CalendarUnit.day;
        }
        //OnceAWeek
        else if (selectedIndex == 1) {
            notTime = Notifications.CalendarUnit.weekday;
        }
        //OnceAMonth
        else if (selectedIndex == 2) {
            notTime = Notifications.CalendarUnit.month;
        }
        localNotification();
        if (_isAndroid) {
            Notifications.local.scheduleNotification(localNotification2);
        } else {
            Notifications.local.scheduleNotification(localNotification1);
        }

    },
        function () {
        //Cancel
        Pages.pgProfile.scrollMainProfile.contUserInfo4.sliderNotifications.checked = false;
        Pages.pgRegister.scrollMainRegister.contUserInfo4.sliderNotifications.checked = false;
    },
        0,
        0);
}
function Global_Events_OnFirstStart(e) {
    //checkNotificationForOnce
    ofsNotCtrl = true;
}
//var isExportCompleted = false;
var streamedNotesArray;
var notesObject = {};
var notesDataSource = [];
function exportToDocuments() {
    var noteText = '';
    noteText = Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.text + 'myNoteSeperator||';
    var notesTxtFile = new SMF.IO.File(SMF.IO.applicationDataDirectory, "notes.txt");
    if (!notesTxtFile.exists)
        notesTxtFile.createFile();
    var notesFile = new SMF.IO.File(SMF.IO.applicationDataDirectory, "notes.txt");
    var streamWriter = notesFile.openStream(SMF.IO.StreamType.append);
    streamWriter.write(noteText + '' + SMF.IO.lineEnding);
    streamWriter.close();
    streamWriter = null;
}
function replaceNote(note){
    var streamReader = new SMF.IO.FileStream(SMF.IO.applicationDataDirectory, "notes.txt", SMF.IO.StreamType.read);
    var replaceText = streamReader.readToEnd();
    streamReader.close();
    streamReader = null;
    replaceText = replaceText.replace(note, Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.text);
    var notesFile = new SMF.IO.File(SMF.IO.applicationDataDirectory, "notes.txt");
    var streamWriter = notesFile.openStream(SMF.IO.StreamType.write);
    streamWriter.write(replaceText + '' + SMF.IO.lineEnding);
    streamWriter.close();
    streamWriter = null;
}
function deleteNote(deleteStr){
    var streamReader = new SMF.IO.FileStream(SMF.IO.applicationDataDirectory, "notes.txt", SMF.IO.StreamType.read);
    var replaceText = streamReader.readToEnd();
    streamReader.close();
    streamReader = null;
    replaceText = replaceText.replace(deleteStr, '');
    var notesFile = new SMF.IO.File(SMF.IO.applicationDataDirectory, "notes.txt");
    var streamWriter = notesFile.openStream(SMF.IO.StreamType.write);
    streamWriter.write(replaceText + '' + SMF.IO.lineEnding);
    streamWriter.close();
    streamWriter = null;
}