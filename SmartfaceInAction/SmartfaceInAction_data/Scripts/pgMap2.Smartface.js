/* Global Variables to Use */
var pinFound;
var latFinal;
var lonFinal;
var titleFinal;
var subTitleFinal;
var imgPathFinal;
var lblRightItem = "";
var distance;
function pgMap2_Self_OnShow(e) {
    counter = 0;
    getDistanceFromLatLonInKm(37.7, -122.43, parseFloat(Data.wcMap_OutDSetpins.latitude), parseFloat(Data.wcMap_OutDSetpins.longitude));
    this.showStatusBar = true;
    var title = lang.mapFiltre;
    if (Device.deviceOS == "Android") {
        header.init(this, mapHeader, mapStatusbarColor, title);
        header.setLeftItem(pagesBack);
    } else {
        header.init(this, mapHeader, mapStatusbarColor, title);
        header.setLeftItem(pagesBack);
    }
    Pages.pgMap1.map.removePin("999");
    pinFound = -1;
    Data.wcMap_OutDSetpins.seek(0);
    for (var i = 0; i < Data.wcMap_OutDSetpins.rowCount; i++) {
        if (Data.wcMap_OutDSetpins.id == selectedPinId) {
            pinFound = i;
            break;
        }
        Data.wcMap_OutDSetpins.moveNext();
    }
    Pages.pgMap2.contMain.contMap.edtPinName.visible = true;
    if (pinFound >= 0) {
        lblRightItem = "";
        titleFinal = Data.wcMap_OutDSetpins.title;
        subTitleFinal = Data.wcMap_OutDSetpins.address;
        latFinal = parseFloat(Data.wcMap_OutDSetpins.latitude);
        lonFinal = parseFloat(Data.wcMap_OutDSetpins.longitude);
        if (Data.wcMap_OutDSetpins.type == 0)
            imgPathFinal = "resources://triangle_pointer.png";
        else if (Data.wcMap_OutDSetpins.type == 1)
            imgPathFinal = "resources://square_pointer.png";
        else if (Data.wcMap_OutDSetpins.type == 2)
            imgPathFinal = "resources://circle_pointer.png";
        else
            imgPathFinal = "resources://circle_pointer.png";
    } else {
        lblRightItem = "save";
        titleFinal = "Dropped Pin";
        subTitleFinal = lastAddress;
        latFinal = lastLat;
        lonFinal = lastLon;
        if (pinTypeToAdd == 0)
            imgPathFinal = "resources://triangle_pointer.png";
        else if (pinTypeToAdd == 1)
            imgPathFinal = "resources://square_pointer.png";
        else if (pinTypeToAdd == 2)
            imgPathFinal = "resources://circle_pointer.png";
        else if (pinTypeToAdd == -1) {
            pinTypeToAdd = 0;
            imgPathFinal = "resources://triangle_pointer.png";
        }
    }
    if (pinFound > 14) {
        Pages.pgMap2.contMain.contFunctions.btnRemovePin.visible = true;
    } else {
        Pages.pgMap2.contMain.contFunctions.btnRemovePin.visible = false;
    }
    if (Device.deviceOS == "iOS") {
        var barButton4 = new SMF.UI.iOS.BarButtonItem({
                title : lblRightItem,
                fontName : "Arial",
                fontSize : 16,
                onSelected : function (e) {
                    pgMap2_btnAddPin_OnPressed();
                }
            });
        var rightItems = [barButton4];
        Pages.pgMap2.navigationItem.rightBarButtonItems = rightItems;
    } else {
        var item2 = new SMF.UI.Android.MenuItem({
                id : lblRightItem,
                title : lblRightItem,
                showAsAction : SMF.UI.Android.ShowAsAction.always,
                onSelected : function (e) {
                    pgMap2_btnAddPin_OnPressed();
                }
            });
        this.actionBar.menuItems = [item2];
    }
    Pages.pgMap2.contMain.contMap.edtPinName.text = titleFinal;
    Pages.pgMap2.contMain.contFunctions.lblAdressDef.text = subTitleFinal;
    Pages.pgMap2.contMain.contMap.map.centerLatitude = latFinal;
    Pages.pgMap2.contMain.contMap.map.centerLongitude = lonFinal;
    Pages.pgMap2.contMain.contMap.map.zoomLevel = 14;
    Pages.pgMap2.contMain.contMap.recBackgroundMap.alpha = 1;
    counter = 1;
    time();
}
/* Back Button OnPressed */
function pgMap2_ImageButton11_OnPressed(e) {
    Pages.back();
}
/* Timer to create a gradient effect on Map */
function time() {
    if (counter < 10) {
        intervalId = setTimeout(function () {
                Pages.pgMap2.contMain.contMap.recBackgroundMap.alpha = Number(Pages.pgMap2.contMain.contMap.recBackgroundMap.alpha) - 0.1;
                counter++;
                time();
            }, 50);
    } else {
        clearTimeout(intervalId);
    }
}
function pgMap2_btnAddPin_OnPressed(e) {
    if (lblRightItem.length > 1) {
        var pinDataset = Data.wcMap_OutDSetpins;
        if (pinFound >= 14) {
            pinDataset.seek(pinFound);
        } else {
            pinDataset.seek(pinDataset.rowCount - 1);
            pinDataset.add();
            pinDataset.id = pinDataset.rowCount - 1;
            pinDataset.subtitle = Pages.pgMap2.contMain.contMap.edtPinName.text;
            pinDataset.address = Pages.pgMap2.contMain.contFunctions.lblAdressDef.text;
            pinDataset.type = pinTypeToAdd;
            pinDataset.latitude = latFinal;
            pinDataset.longitude = lonFinal;
        }
        pinDataset.title = Pages.pgMap2.contMain.contMap.edtPinName.text;
        pinDataset.commit();
        for (var i = 0; i < pinDataset.rowCount; i++) {
            Pages.pgMap1.map.removePin(i.toString());
            pinDataset.moveNext();
        }
        pinDataset.seek(0);
        rowAddedToPinDataset = true;
        var alertObj = alert({
                title : lang.mapMessage,
                message : lang.mapSaveLoc,
                firstButtonText : lang.mapTextDone,
                onFirstButtonPressed : function () {},
            });
        Pages.back();
    }
}
function pgMap2_btnAddContact_OnPressed(e) {
    Device.Contacts.addContact({
        firstName : Pages.pgMap2.contMain.contMap.edtPinName.text,
        lastName : "",
        phoneNumber : "",
        address : Pages.pgMap2.contMain.contFunctions.lblAdressDef.text,
        onSuccess : function (e) {
            var alertObj = alert({
                    title : lang.mapMessage,
                    message : lang.mapSave,
                    firstButtonText : lang.mapTextDone,
                    onFirstButtonPressed : function () {},
                });
        }
    });
    SES.Analytics.eventLog("Add Contact", '{\"function\":\"pgMap2_btnAddContact_OnPressed\"}');
}
function pgMap2_btnShare_OnPressed(e) {
    var str = Pages.pgMap2.contMain.contFunctions.lblAdressDef.text;
    var addressUrl = str.replace(/\ /g, '');
    if (Device.deviceOS == "Android")
        var messageText = Pages.pgMap2.contMain.contFunctions.lblAdressDef.text + "  " + "http://maps.google.com/maps?saddr=" + encodeURIComponent(str);
    else
        var messageText = Pages.pgMap2.contMain.contFunctions.lblAdressDef.text + "  " + "http://maps.apple.com/?q=" + encodeURIComponent(str);
    Social.share(Pages.pgMap2.contMain.contMap.edtPinName.text, messageText, function () {}, function () {});
    SES.Analytics.eventLog("Share address link", '{\"function\":\"pgMap2_btnShare_OnPressed\"}');
}
function pgMap2_btnShowRoute_OnPressed(e) {
    if (!newPage) {
        newPage = new SMF.UI.Page({
                fillColor : "#333333",
                showNavigationBar : true,
                showStatusBar : true,
                onShow : function () {
                    getDistanceFromLatLonInKm(37.7, -122.43, parseFloat(Data.wcMap_OutDSetpins.latitude), parseFloat(Data.wcMap_OutDSetpins.longitude));
                    var title = lang.showroute;
                    header.init(this, mapHeader, mapStatusbarColor, title);
                    header.setLeftItem(pagesBack);
                    header.setRightItemBos();
                    var imgPath;
                    if (Data.wcMap_OutDSetpins.type == 0)
                        imgPath = "resources://triangle_pointer.png";
                    else if (Data.wcMap_OutDSetpins.type == 1)
                        imgPath = "resources://square_pointer.png";
                    else
                        imgPath = "resources://circle_pointer.png";
                    newMap.addPin({
                        id : "999",
                        title : Data.wcMap_OutDSetpins.title,
                        subtitle : Data.wcMap_OutDSetpins.address,
                        latitude : parseFloat(Data.wcMap_OutDSetpins.latitude),
                        longitude : parseFloat(Data.wcMap_OutDSetpins.longitude),
                        selectedImage : imgPath,
                        unSelectedImage : imgPath,
                        draggable : false,
                        animate : false
                    });
                    newMap.addPin({
                        id : "998",
                        title : distance.toString() + " km",
                        subtitle : Data.wcMap_OutDSetpins.title,
                        latitude : 37.7,
                        longitude : -122.43,
                        selectedImage : "endway.png",
                        unSelectedImage : "endway.png",
                        draggable : false,
                        animate : false
                    });
                    newMap.showRoute(37.7, -122.43, parseFloat(Data.wcMap_OutDSetpins.latitude), parseFloat(Data.wcMap_OutDSetpins.longitude));
                    newMap.routeLineColor = "black";
                }
            });
        var newMap = new SMF.UI.MapView({
                top : "0%",
                left : "0%",
                width : "100%",
                height : "100%",
                showUserLocation : false,
            });
        newPage.add(newMap);
    }
    newPage.onKeyPress = funcBack;
    newPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
    SES.Analytics.eventLog("Show Route", '{\"function\":\"pgMap2_btnShowRoute_OnPressed\"}');
}
function funcBack(e) {
    if (e.keyCode == 4)
        Pages.back();
}
function pgMap2_btnRemovePin_OnPressed(e) {
    Data.wcMap_OutDSetpins.seek(pinFound);
    Pages.pgMap1.map.removePin(pinFound.toString());
    Data.wcMap_OutDSetpins.deleteRow();
    Data.wcMap_OutDSetpins.commit();
    Pages.back();
}
// calculate distance between 2 location
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    distance = R * c; // Distance in km
    distance = Math.round(distance * 1000) / 1000;
    return distance;
}
function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
function pgMap2_Self_OnKeyPress(e) {
    if (e.keyCode == 4)
        Pages.back();
}