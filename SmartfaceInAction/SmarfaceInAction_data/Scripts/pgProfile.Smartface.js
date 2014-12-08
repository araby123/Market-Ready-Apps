var birthDate; // a flag , holding date value from datepicker
var isAnimating = false; // a flag for control cntNotifications position
var isAnimate1 = false; // a flag for control cntNotifications position // kontrol et tekrar
var updateProfileImageWebClient = new SMF.Net.WebClient(); // webClient object for fetching server response
var isAllow = Pages.pgProfile.scrollMainProfile.contUserInfo4.sliderNotifications.checked;
// setting back button function
function profileBack() {
    Social.Facebook.closeSession();
    Pages.back(Pages.pgLogin);
}
// setting which open dialog
function dlgFormUserInfo() {
    Dialogs.dlgFormUserInfo.show();
}
function pgProfile_Self_OnShow(e) {
    //instead of picker you can use menuItem for localNotification
    //createNotMenu();
    Pages.pgProfile.scrollMainProfile.contUserInfo2.edtPassword.isPassword = true;
    if (fromLogin == 3) {
        Pages.pgProfile.scrollMainProfile.contUserInfo4.lblInterest.text = "";
        Data.DS_Interest.seek(0);
        for (var i = 0; i < Data.DS_Interest.rowCount; i++) {
            if (!Data.DS_Interest.image == "")
                Pages.pgProfile.scrollMainProfile.contUserInfo4.lblInterest.text += Data.DS_Interest.interestName + ",";
            Data.DS_Interest.moveNext();
            continue;
        }
    } else if (fromLogin == 2)
        this.scrollMainProfile.contUserInfo3.lblAddress.text = address;
    var title = lang.pgProfileTitle;
    if (Device.deviceOS == "Android") {
        header.init(this, formHeader, formStatusbarColor, title);
        header.setLeftItem(profileBack);
        this.scrollMainProfile.contUserInfo4.sliderNotifications.tintColor = "#BEC3C7";
        this.scrollMainProfile.contUserInfo4.sliderNotifications.thumbTintColor = "#7FEA00";
        this.scrollMainProfile.contUserInfo4.sliderNotifications.onTintColor = "#6FD865";
    } else {
        if (Device.deviceOS == "iOS") {
            header.init(this, formHeader, formStatusbarColor, title);
            header.setLeftItem(profileBack);
            header.setRightItem(dlgFormUserInfo);
            this.scrollMainProfile.contUserInfo4.sliderNotifications.tintColor = "#BEC3C7";
            this.scrollMainProfile.contUserInfo4.sliderNotifications.thumbTintColor = "white";
            this.scrollMainProfile.contUserInfo4.sliderNotifications.onTintColor = "#6FD865";
        }
    }
    // to set emotion image to object according to interest value
    var valueofEmotion = Number(this.scrollMainProfile.contUserInfo4.lblLikePoint.text);
    if (valueofEmotion >= 80) {
        Pages.pgProfile.scrollMainProfile.contUserInfo4.imgLike.image = "emotion_love.png";
    }
    if (valueofEmotion >= 60 && valueofEmotion < 80) {
        this.scrollMainProfile.contUserInfo4.imgLike.image = "emotion_cool.png";
    }
    if (valueofEmotion >= 40 && valueofEmotion < 60) {
        this.scrollMainProfile.contUserInfo4.imgLike.image = "emotion_happy.png";
    }
    if (valueofEmotion >= 20 && valueofEmotion < 40) {
        this.scrollMainProfile.contUserInfo4.imgLike.image = "emotion_eh.png";
    }
    if (valueofEmotion < 20) {
        this.scrollMainProfile.contUserInfo4.imgLike.image = "emotion_sad.png";
    }
}
// to show how to get the image
function pgProfile_imgProfile_OnTouchEnded(e) {
    fromProfile = true;
    imgCropSelect = 1;
    var item1 = {
        title : "Select from Gallery",
        icon : "icon.png", // Andrid 3.0- only
        onSelected : function (e) {
            takeCropImage(false);
        }
    };
    var item2 = {
        title : "Capture a Photo",
        icon : "icon.png", // Andrid 3.0- only
        onSelected : function (e) {
            takeCropImage(true);
        }
    };
    var item3 = {
        title : "Cancel",
        itemType : SMF.UI.MenuItemType.cancel, //  iOS Only
        onSelected : function (e) {}
    };
    var myItems = [item1, item2, item3]; // assume that items are predefined
    var menu1 = new SMF.UI.Menu({
            menuStyle : SMF.UI.MenuStyle.optionalMenu,
            icon : "menu_icon.png", // Android Context Menu Only
            items : myItems
        });
    menu1.show();
}
function pgProfile_btnSubmit_OnPressed(e) {
    if (emailorFbLogin == 0) {
        if (Pages.pgProfile.scrollMainProfile.contUserInfo2.edtEmail1.text != "") {
            if (Pages.pgProfile.scrollMainProfile.contUserInfo2.edtPassword.text.length == 4) {
                Dialogs.dlgHomePgLoading.show();
                // to create JSON Object
                var req = {
                    "Password" : Pages.pgProfile.scrollMainProfile.contUserInfo2.edtPassword.text,
                    "Email" : Pages.pgProfile.scrollMainProfile.contUserInfo2.edtEmail1.text,
                    "Phone" : Pages.pgProfile.scrollMainProfile.contUserInfo2.edtPhoneNumber.text,
                    "BirthDate" : Pages.pgProfile.scrollMainProfile.contUserInfo2.lblBirthDate.text,
                    "IsAllowMessage" : isAllow,
                    "Address" : Pages.pgProfile.scrollMainProfile.contUserInfo3.lblAddress.text,
                    "LikePoint" : Number(Pages.pgProfile.scrollMainProfile.contUserInfo4.sliderLike.value),
                    "Interests" : Pages.pgProfile.scrollMainProfile.contUserInfo4.lblInterest.text,
                };
                req = JSON.stringify(req);
                updateWebClient.requestBody = req;
                updateProfileImageWebClient.url = "http://services.smartface.io/SmartfaceInAction/UploadProfileLogo?email=" + Pages.pgProfile.scrollMainProfile.contUserInfo2.edtEmail1.text;
                updateWebClient.onSyndicationSuccess = updateOnsyndicationSuccess;
                updateWebClient.run(true);
                SES.Analytics.customerLog("", "", Pages.pgProfile.scrollMainProfile.contUserInfo2.edtPhoneNumber.text, Pages.pgProfile.scrollMainProfile.contUserInfo2.edtEmail1.text, Pages.pgProfile.scrollMainProfile.contUserInfo2.edtEmail1.text);
            } else {
                alert(lang.limitPassword);
            }
        } else {
            alert(lang.validateMail);
        }
    } else if (emailorFbLogin == 1) {
        Dialogs.dlgHomePgLoading.show();
        // to create JSON Object
        var req = {
            "Phone" : Pages.pgProfile.scrollMainProfile.contUserInfo2.edtPhoneNumber.text,
            "BirthDate" : Pages.pgProfile.scrollMainProfile.contUserInfo2.lblBirthDate.text,
            "IsAllowMessage" : isAllow,
            "Address" : Pages.pgProfile.scrollMainProfile.contUserInfo3.lblAddress.text,
            "LikePoint" : Number(Pages.pgProfile.scrollMainProfile.contUserInfo4.sliderLike.value),
            "Interests" : Pages.pgProfile.scrollMainProfile.contUserInfo4.lblInterest.text,
            "FacebookId" : fId
        };
        req = JSON.stringify(req);
        updateProfileImageWebClient.url = "http://services.smartface.io/SmartfaceInAction/UploadProfileLogo?email=" + fId;
        updateWebClient.requestBody = req;
        updateWebClient.run(true);
        SES.Analytics.customerLog("", "", Pages.pgProfile.scrollMainProfile.contUserInfo2.edtPhoneNumber.text, Pages.pgProfile.scrollMainProfile.contUserInfo2.edtEmail1.text, Pages.pgProfile.scrollMainProfile.contUserInfo2.edtEmail1.text);
    }
}
function updateOnsyndicationSuccess(e) {
    var responseObjct = JSON.parse(updateWebClient.responseText);
    if (responseObjct.isSuccess == "false") {
        alert("An error is occured");
        Dialogs.dlgHomePgLoading.close();
    } else {
        if (didImageChanged) {
            updateProfileImageWebClient.httpMethod = "PUT";
            updateProfileImageWebClient.request = imageFileProfile;
            updateProfileImageWebClient.requestHeaders = ["Content-Type: image/png"];
            updateProfileImageWebClient.ignoreSSLErros = true;
            updateProfileImageWebClient.run(true);
            updateProfileImageWebClient.onSyndicationSuccess = function (e) {
                var response = JSON.parse(updateProfileImageWebClient.responseText);
                if (response.isSuccess == "false") {
                    //if there is an error while uploading image and/or user is not add any photo
                    alert("Image can't be uploaded or you didn't select any image");
                } else {
                    alert(lang.updateProfile);
                }
                Dialogs.dlgHomePgLoading.close();
            }
        } else {
            alert(lang.updateProfile);
            Dialogs.dlgHomePgLoading.close();
        }
    }
}
// to set emotion image to object according to slider value
function pgProfile_sliderLike_OnChange(e) {
    if (this.value >= 80) {
        this.parent.imgLike.image = "emotion_love.png";
    }
    if (this.value >= 60 && this.value < 80) {
        this.parent.imgLike.image = "emotion_cool.png";
    }
    if (this.value >= 40 && this.value < 60) {
        this.parent.imgLike.image = "emotion_happy.png";
    }
    if (this.value >= 20 && this.value < 40) {
        this.parent.imgLike.image = "emotion_eh.png";
    }
    if (this.value < 20) {
        this.parent.imgLike.image = "emotion_sad.png";
    }
    Pages.pgProfile.scrollMainProfile.contUserInfo4.lblLikePoint.text = this.value;
}
// setting contNotificationNumber position according to switchbutton value
function pgProfile_sliderNotifications_OnChange(e) {
    if (this.checked) {
        if (Device.deviceOS == 'iOS') {
            notPicker(false);
        } else {
            notPicker(true);
        }
        isAllow = this.checked;
    } else {
        disableNotification();
    }
}
function pgProfile_btnInteres_OnPressed(e) {
    header.init(Pages.pgInterestList, formHeader, formStatusbarColor, lang.interestlist);
    header.setLeftItem(pagesBack);
    header.setRightItem(Dialogs.dlgInterestList);
    Pages.pgInterestList.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
// selecting date from datepicker
function pgProfile_lblBirthDate_OnTouchEnded(e) {
    SMF.UI.showDatePicker({
        currentDate : new Date("November 14, 1994 11:13:00"),
        mask : "YYYY-MM-DD",
        minDate : new Date("December 31, 1920 11:13:00"),
        maxDate : new Date("December 31, 2000 11:13:00"),
        showWorkingDate : true,
        onSelect : function (e) {
            var sDate = new Date(e.date);
            Pages.pgProfile.scrollMainProfile.contUserInfo2.lblBirthDate.text = formattedDate(sDate);
            birthDate = sDate;
        },
        onCancel : function (e) {}
    });
}
function formattedDate(date) {
    var d = new Date(date || Date.now()),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}
function pgProfile_mapAddress_OnLongTouch(e) {
    Pages.pgMapView.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
    fromLogin = 2;
}
function pgProfile_imgMap_OnPressed(e) {
    fromRegisterorProfile = 1;
    header.init(Pages.pgMapView, formHeader, formStatusbarColor, lang.map);
    header.setLeftItem(pagesBack);
    header.setRightItem(Dialogs.dlgFormMap);
    Pages.pgMapView.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
// selecting date from datepicker
function pgProfile_lblBirthData_OnTouchEnded(e) {
    SMF.UI.showDatePicker({
        currentDate : new Date("November 14, 1994 11:13:00"),
        mask : "YYYY-MM-DD",
        minDate : new Date("December 31, 1920 11:13:00"),
        maxDate : new Date("December 31, 2000 11:13:00"),
        showWorkingDate : true,
        onSelect : function (e) {
            var sDate = new Date(e.date);
            Pages.pgProfile.scrollMainProfile.contUserInfo2.lblBirthDate.text = formattedDate(sDate);
            birthDate = sDate;
        },
        onCancel : function (e) {}
    });
}
function pgProfile_Self_OnKeyPress(e) {
    Social.Facebook.closeSession();
    if (e.keyCode == 4)
        Pages.pgLogin.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.leftToRight, SMF.UI.TransitionEffectType.push, false, false);
}
function pgProfile_edtEmail1_OnReturnKey(e) {
    Pages.pgProfile.scrollMainProfile.contUserInfo2.edtPassword.focus();
}