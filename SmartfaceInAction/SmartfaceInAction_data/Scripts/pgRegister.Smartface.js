var isAllow = Pages.pgRegister.scrollMainRegister.contUserInfo4.sliderNotifications.checked = false; // a flag , holding SwitchButton check value
var birthDate; // a flag , holding date value from datepicker
var registerProfileImageWebClient = new SMF.Net.WebClient(); // webClient object for fetching server response
// to show how to get the image
function pgRegister_imgProfile_OnTouchEnded(e) {
    fromProfile = false;
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
function pgRegister_btnSubmit_OnPressed(e) {
    if (Pages.pgRegister.scrollMainRegister.contUserInfo2.edtEmail.text != "") {
        if (validateEmail(Pages.pgRegister.scrollMainRegister.contUserInfo2.edtEmail.text)) {
            if (Pages.pgRegister.scrollMainRegister.contUserInfo2.edtPassword.text.length == 4) {
                Dialogs.dlgHomePgLoading.show();
                // to create JSON Object
                var req = {
                    "Password" : Pages.pgRegister.scrollMainRegister.contUserInfo2.edtPassword.text,
                    "Email" : Pages.pgRegister.scrollMainRegister.contUserInfo2.edtEmail.text,
                    "Phone" : Pages.pgRegister.scrollMainRegister.contUserInfo2.edtPhoneNumber.text,
                    "BirthDate" : Pages.pgRegister.scrollMainRegister.contUserInfo2.lblBirthDate.text,
                    "IsAllowMessage" : isAllow,
                    "Address" : Pages.pgRegister.scrollMainRegister.contUserInfo3.lblAddress.text,
                    "LikePoint" : Number(Pages.pgRegister.scrollMainRegister.contUserInfo4.sliderLike.value),
                    "Interests" : Pages.pgRegister.scrollMainRegister.contUserInfo4.lblInterest.text
                };
                req = JSON.stringify(req);
                registerWebClient.requestBody = req;
                registerWebClient.onSyndicationSuccess = registerOnsyndicationSuccess;
                registerWebClient.run(false);
                SES.Analytics.customerLog("", "", Pages.pgRegister.scrollMainRegister.contUserInfo2.edtPhoneNumber.text, Pages.pgRegister.scrollMainRegister.contUserInfo2.edtEmail.text, Pages.pgRegister.scrollMainRegister.contUserInfo2.edtEmail.text);
            } else {
                alert(lang.limitPassword);
            }
        } else {
            alert(lang.validateMail);
        }
    } else {
        alert(lang.validateMail);
    }
}
function registerOnsyndicationSuccess(e) {
    var responseObject = JSON.parse(registerWebClient.responseText);
    if (responseObject.isSuccess == "false") {
        Dialogs.dlgHomePgLoading.close();
        alert(lang.registerMailUsed);
    } else {
        registerProfileImageWebClient.url = "http://services.smartface.io/SmartfaceInAction/UploadProfileLogo?email=" + Pages.pgRegister.scrollMainRegister.contUserInfo2.edtEmail.text;
        registerProfileImageWebClient.httpMethod = "PUT";
        registerProfileImageWebClient.request = imageFileRegister;
        registerProfileImageWebClient.requestHeaders = ["Content-Type: image/png"];
        registerProfileImageWebClient.ignoreSSLErros = true;
        registerProfileImageWebClient.run(true);
        registerProfileImageWebClient.onSyndicationSuccess = function (e) {
            var response = JSON.parse(registerProfileImageWebClient.responseText);
            Dialogs.dlgHomePgLoading.close();
            alert({
                message : lang.registersuccess,
                title : lang.register,
                alpha : 1,
                firstButtonText : "OK",
                OnFirstButtonPressed : function () {
                    Pages.pgLogin.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.leftToRight, SMF.UI.TransitionEffectType.push, false, false);
                },
                OnSecondButtonPressed : function () {},
                OnThirdButtonPressed : function () {}
            });
        }
    }
}
// to set emotion image to object according to slider value
function pgRegister_sliderLike_OnChange(e) {
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
    Pages.pgRegister.scrollMainRegister.contUserInfo4.lblLikePoint.text = this.value;
}
function pgRegister_sliderNotifications_OnChange(e) {
    if (this.checked) {
        if (Device.deviceOS == 'iOS') {
            notPicker(false);
        } else {
            notPicker(true);
        }
    } else {
        disableNotification();
    }
}
function pgRegister_btnInteres_OnPressed(e) {
    if (Device.deviceOS == "Android") {
        header.init(Pages.pgInterestList, formHeader, formStatusbarColor, lang.interestlist);
        header.setLeftItem(pagesBack);
        header.setRightItem(Dialogs.dlgInterestList);
    }
    Pages.pgInterestList.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
// setting which open dialog
function showdlgFormRegister() {
    Dialogs.dlgFormRegister.show();
}
// setting back button function
function registerBack() {
    Pages.back(Pages.pgLogin);
}
function pgRegister_Self_OnShow(e) {
    //instead of picker you can use menuItem for localNotification
    //    createNotMenu();
    sDateGlobal = new Date("November 14, 1994 11:13:00");
    this.scrollMainRegister.contUserInfo1.cntProfile.width = this.scrollMainRegister.contUserInfo1.cntProfile.height;
    var title = lang.pgRegisterTitle;
    Pages.pgRegister.scrollMainRegister.contUserInfo2.edtPassword.isPassword = true;
    if (Device.deviceOS == "Android") {
        this.scrollMainRegister.contUserInfo4.sliderNotifications.thumbTintColor = "#7FEA00";
        header.init(this, formHeader, formStatusbarColor, title);
        header.setLeftItem(registerBack);
    } else {
        header.init(this, formHeader, formStatusbarColor, title);
        header.setLeftItem(registerBack);
        header.setRightItem(showdlgFormRegister);
        this.scrollMainRegister.contUserInfo4.sliderNotifications.tintColor = "#BEC3C7";
        this.scrollMainRegister.contUserInfo4.sliderNotifications.thumbTintColor = "white";
        this.scrollMainRegister.contUserInfo4.sliderNotifications.onTintColor = "#6FD865";
    }
    this.scrollMainRegister.contUserInfo4.lblInterest.text = "";
    Data.DS_Interest.seek(0);
    for (var i = 0; i < Data.DS_Interest.rowCount; i++) {
        if (!Data.DS_Interest.image == "")
            this.scrollMainRegister.contUserInfo4.lblInterest.text += Data.DS_Interest.interestName + ",";
        Data.DS_Interest.moveNext();
        continue;
    }
    Pages.pgRegister.scrollMainRegister.contUserInfo2.edtPhoneNumber.keyboardType = SMF.UI.KeyboardType.phonePad;
    Pages.pgRegister.scrollMainRegister.contUserInfo2.edtEmail.keyboardType = SMF.UI.KeyboardType.emailAddress;
}
// selecting date from datepicker
function pgRegister_lblBirthDate_OnTouchEnded(e) {
    SMF.UI.showDatePicker({
        currentDate : sDateGlobal,
        mask : "YYYY-MM-DD",
        minDate : new Date("December 31, 1920 11:13:00"),
        maxDate : new Date("December 31, 2000 11:13:00"),
        showWorkingDate : true,
        onSelect : function (e) {
            var sDate = new Date(e.date);
            sDateGlobal = sDate;
            Pages.pgRegister.scrollMainRegister.contUserInfo2.lblBirthDate.text = formattedDate(sDate);
            birthDate = formattedDate(sDate);
            Pages.pgRegister.scrollMainRegister.contUserInfo2.lblBirthDate.fontColor = "#7A7A7A";
        },
        onCancel : function (e) {}
    });
}
// to format date as MM.DD.YYYY
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
function pgRegister_imgMap_OnPressed(e) {
    fromRegisterorProfile = 2;
    header.init(Pages.pgMapView, formHeader, formStatusbarColor, "Map");
    header.setLeftItem(pagesBack);
    header.setRightItem(Dialogs.dlgFormMap);
    Pages.pgMapView.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
function pgRegister_edtPhoneNumber_OnEnter(e) {
    Pages.pgRegister.scrollMainRegister.recBackground.touchEnabled = true;
}
function pgRegister_recBackground_OnTouch(e) {
    Pages.pgRegister.scrollMainRegister.recBackground.touchEnabled = false;
    Pages.pgRegister.scrollMainRegister.contUserInfo2.edtPhoneNumber.closeKeyboard();
}
function pgRegister_Self_OnKeyPress(e) {
    if (e.keyCode == 4)
        Pages.pgLogin.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.leftToRight, SMF.UI.TransitionEffectType.push, false, false);
}
function pgRegister_edtEmail_OnReturnKey(e) {
    Pages.pgRegister.scrollMainRegister.contUserInfo2.edtPassword.focus();
}
function pgRegister_edtPhoneNumber_OnReturnKey(e) {
    Pages.pgRegister.scrollMainRegister.contUserInfo2.edtPhoneNumber.closeKeyboard();
}