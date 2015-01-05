var lang = {};
function notifyLang() {
    for (var keyword in lang) {
        if (lang.hasOwnProperty(keyword)) {
            Data.notify('lang["' + keyword + '"]');
            Data.notify("lang['" + keyword + "']");
            Data.notify('lang.' + keyword);
        }
    }
}
function changeLang(languageCode, doNotify) {
    switch (languageCode) {
    case "en":
        lang = {
            "cancel" : " Cancel",
            "export" : "Export",
            "new" : "New",
            "noNotes" : "No Notes",
            "notes" : "Notes",
            "back" : "Back",
            "copy" : "Copy",
            "done" : "Done ",
            "copyURL" : "Copy URL",
            "cut" : "Cut",
            "no" : "No",
            "ok" : "OK",
            "paste" : "Paste",
            "selectAll" : "Select All",
            "untitled" : "Untitled",
            "yes" : "Yes",
            "sureToDelete" : "Are you sure to delete?",
            "networkError" : "There has been a network error, please try again later",
            "applicationError" : "There has been an unhandled application error, please inform developers",
            "homePage1" : "Improve your understanding about Smartface App Studio capabilities",
            "homePage2" : "Access to project codes via GitHub and use them",
            "homePage3" : "Follow us on Twitter. We’ll keep you updated.",
            "formMain1" : "Form object samples",
            "formMain2" : "Use your own web service",
            "formMain3" : "Start with registration.",
            "formRegister1" : "Crop photos after capturing and/or selecting from gallery",
            "formRegister2" : "Add addresses via maps",
            "formRegister3" : "Use Native Slider and Switch objects",
            "formRegister4" : "Use native Switch Button to enable local notifications",
            "formProfile1" : "Pull the page down to see notifications menu",
            "formProfile2" : "Delete messages using swipe",
            "formProfile3" : "Edit previously saved data",
            "listView1" : "We used news concept for ListView",
            "listView2" : "Pull up to refresh when on line mode",
            "listView3" : "Swipe to delete or share the news",
            "listLine1" : "Browse through news using swipe",
            "listLine2" : "Notice the change in photos when scrolling",
            "listSquare1" : "Browse through news using swipe ",
            "listSquare1" : "Surf among the photos of the news",
            "listBoxed" : "Browse through news using swipe ",
            "canvas" : "Canvas objects provides format features that can be shaped based on data, without a dependency on bitmap images",
            "canvasLine1" : "Play around with colors and animations to create several different graphics",
            "canvasLine2" : "Coordinates are hard coded. Link them to web services if needed.",
            "canvasCounter" : "A classical donut form. A small circle with the background color over a bigger one",
            "map1" : "Change Map Type icon in Filter Menu",
            "map2" : "Add a new pin on Long Touch",
            "map3" : "Examine the time difference between the Pin drops",
            "map4" : "Use filter for the type",
            "interest" : "Select or unselect your interest ",
            "formMap" : "Change current location with another by on Long Touch.",
            "mapFiltre" : "Filter",
            "mapResult" : "result",
            "mapAddress" : "Address",
            "mapRoute" : "Show Route",
            "mapAddContact" : "Add contact",
            "mapShare" : "Share",
            "mapRemovePin" : "Remove Pin",
            "map" : "Map",
            "mapDetails" : "Map Details",
            "showroute" : "Show Route",
            "mapMessage" : "Message",
            "mapSave" : "Contact is saved",
            "mapTextDone" : "Done",
            "mapSaveLoc":"Location saved",
            "lineGraph1" : "Line Graph1",
            "lineGraph2" : "Line Graph2",
            "counter" : "Counter",
            "barGraph" : "Bar Graph",
            "counting" : "counting...",
            "startAgaing" : "Start Again",
            "jan" : "Jan",
            "feb" : "Feb",
            "mar" : "Mar",
            "apr" : "Apr",
            "may" : "May",
            "june" : "june",
            "july" : "July",
            "login" : "Login",
            "register" : "Register",
            "loginwithFacebook" : "Login with Facebook",
            "email" : "Email",
            "password" : "Password",
            "birthDate" : "Birth Date",
            "phoneNumber" : "Phone Number",
            "allowMsg" : "Allow Notifications",
            "likeThisApp" : "Like This App?",
            "chooseInterest" : "Choose Your Interest",
            "submit" : "Submit",
            "update" : "Update",
            "interestlist" : "Interest List",
            "registersuccess" : "Registration Successful",
            "deleteNews" : "Delete",
            "shareNews" : "Share",
            "dlSmartface" : "Shared via Smartface in Action: ",
            "canceled" : "Canceled",
            "pgDashboardTitle" : "Use Cases",
            "pgBoxedStyleTitle" : "Boxed Content",
            "pgCanvas1" : "Canvas",
            "pgLineStyleTitle" : "Line Content",
            "pgListViewTitle" : "List View",
            "pgLoginTitle" : "Login",
            "pgProfileTitle" : "User Profile",
            "pgRegisterTitle" : "Register",
            "pgSquareContentTitle" : "Square Content",
            "notificationCancel" : "Notification has been canceled",
            "notificationDay" : "Once a day",
            "notificationWeek" : "Once a week",
            "notificationMonth" : "Once a month",
            "notificationMsg" : "Smartface in Action Notification",
            "notificationSubtext" : "Subtext is the third line.",
            "limitPassword" : "Password must be at least 4 characters",
            "validateMail" : "Please Enter valid mail address",
            "updateProfile" : "Update is succesful",
            "registerMailUsed" : "Your email used has been used before",
            "imgLoadError" : "There is an error while loading image",
            "comments" : "Notes",
            "add" : "Add"
        };
        break;
    case "tr":
        lang = {
            "cancel" : " İptal",
            "back" : "Geri",
            "export" : "Kaydet",
            "noNotes" : "Not Yok",
            "notes" : "Notlarım",
            "new" : "Yeni",
            "copy" : "Kopyala",
            "done" : "Yapıldı ",
            "copyURL" : "Adresi Kopyala",
            "cut" : "Kes",
            "no" : "Hayır",
            "ok" : "Tamam",
            "paste" : "Yapıştır",
            "selectAll" : "Tamamını Seç",
            "untitled" : "Başlıksız",
            "yes" : "Evet",
            "sureToDelete" : "Silmek istediğinize emin misiniz?",
            "networkError" : "Bir ağ bağlantı hatası oluştu, lütfen daha sonra tekrar deneyiniz",
            "applicationError" : "Beklenmeyen bir hata oluştu, lütfen geliştiricileri bilgilendiriniz",
            "homePage1" : "Smartface App Studio nun yeteneklerini anlayın.",
            "homePage2" : "Buradaki projelerin kodlarını GitHub tan erişin ve kullanın",
            "homePage3" : "Twitterdan bizi takip edin. Sürekli güncelleyeceğiz.",
            "formMain1" : "Form objeleri örneklerini görün.",
            "formMain2" : "Kendi web servisinizi kullanın.",
            "formMain3" : "Register olarak başlayın",
            "formRegister1" : "Fotoğraf çektinden ve/veya galeriden seçtikten sonra Crop edin",
            "formRegister2" : "Adres eklemeleri Map üzerinden yapın.",
            "formRegister3" : "Native Slider ve Switch objelerimizi kullanın.",
            "formRegister4" : "Native Switch Button ile local notificationı aktif edin",
            "formProfile1" : "Bildirim menüsü için sayfayı aşağı çekin",
            "formProfile2" : "Swipe özelliği ile istediğiniz mesajları silin",
            "formProfile3" : "Önceden girdiğiniz bilgileri editleyin.",
            "listView1" : "ListView için haber konsepti kullandık. ",
            "listView2" : "Line modunda pull up refresh yapın.",
            "listView3" : "Swipe ile haberi silin veya paylaşın.",
            "listLine1" : "Swipe ile haberler arası gezin",
            "listLine2" : "Scroll kullarak fotoğraftaki değişimi gözlemleyin",
            "listSquare1" : "Swipe ile haberler arası gezin",
            "listSquare1" : "Haberlerin fotoğrafları arasında gezin.",
            "listBoxed" : "Swipe ile haberler arası gezin.",
            "canvas" : "Canvas objeleri, uygulama içinde bitmap imajlara bağlı kalmadan ve database den alacağınız bilgilerle şekillendirebileceğiniz  biçim özellikleri sunar. ",
            "canvasLine1" : "Renkleri ve animasyon özellikleriyle oynayıp değişik grafikler yaratın",
            "canvasLine2" : "Koordinatlar kod içindedir. Dilerseniz web servise bağlayın",
            "canvasCounter" : "Klasik bir donut formu. Büyük daire üzerinde background  ile aynı renk daha küçük bir daire",
            "map1" : "Filtre menüsündeki iconlardan Map Type I değiştirin.",
            "map2" : "Long Touch ile yeni bir pin ekleyin",
            "map3" : "Pinlerin ayrı zamanlarda düşmesini inceleyin",
            "map4" : "Farklı ikon tipleri görmek için filtreyi kullanın",
            "interest" : "Hobilerinizi seçiniz",
            "formMap" : "LongTouch ile bulunduğunuz yerin konumu yerine başka bir konumu seçebilirsiniz",
            "mapFiltre" : "Filtre",
            "mapResult" : "sonuç",
            "mapAddress" : "Adres",
            "mapRoute" : "Rota",
            "mapAddContact" : "Kişiyi kaydet",
            "mapShare" : "Paylaş",
            "mapRemovePin" : "İğneyi kaldır",
            "map" : "Harita",
            "mapDetails" : "Harita Detayı",
            "showroute" : "Rota Göster",
            "mapMessage" : "Mesaj",
            "mapSave" : "Kişi kaydedildi",
            "mapTextDone" : "Tamam",
            "mapSaveLoc" : "Konum kaydedildi",
            "lineGraph1" : "Çizgisel Grafik1",
            "lineGraph2" : "Çizgisel Grafik2",
            "counter" : "Sayaç Grafik",
            "barGraph" : "Bar Grafik",
            "counting" : "hesaplanıyor...",
            "startAgaing" : "Tekrar Başlat",
            "jan" : "Ocak",
            "feb" : "Şub",
            "mar" : "MArt",
            "apr" : "Nis",
            "may" : "May",
            "june" : "Haz",
            "july" : "Tem",
            "login" : "Giriş",
            "register" : "Kayıt Ol",
            "loginwithFacebook" : "Facebook ile giriş yap",
            "email" : "Email",
            "password" : "Şifre",
            "birthDate" : "Doğum Tarihi",
            "phoneNumber" : "Telefon Numarası",
            "allowMsg" : "Bildirime İzin Ver",
            "likeThisApp" : "Uygulama Puanı?",
            "chooseInterest" : "İlgi Alanınızı Seçiniz",
            "submit" : "Onayla",
            "update" : "Güncelle",
            "interestlist" : "İlgi Alanı Listesi",
            "registersuccess" : "Kayıt işlemi tamamlandı",
            "deleteNews" : "Sil",
            "shareNews" : "Paylaş",
            "dlSmartface" : "Smartface in Action Aracılığıyla Paylaşıldı: ",
            "canceled" : "İptal Edildi",
            "pgDashboardTitle" : "Kullanım Senaryoları",
            "pgBoxedStyleTitle" : "Kutu Görünümü",
            "pgCanvas1" : "Tuval",
            "pgLineStyleTitle" : "Line İçeriği",
            "pgListViewTitle" : "Liste Görünümü",
            "pgLoginTitle" : "Üye Girişi",
            "pgProfileTitle" : "Kullanıcı Profili",
            "pgRegisterTitle" : "Üyelik Kaydı",
            "pgSquareContentTitle" : "Kare Görünümü",
            "notificationCancel" : "Bildirimler İptal Edildi",
            "notificationDay" : "Günde bir kere",
            "notificationWeek" : "Haftada bir kere",
            "notificationMonth" : "Ayda bir kere",
            "notificationMsg" : "Smartface in Action Bildirimi",
            "notificationSubtext" : "Subtext üçüncü satırdadır",
            "limitPassword" : "Şifreniz en az 4 karakterden oluşmalıdır",
            "validateMail" : "Mail adresinizi kontrol ediniz",
            "updateProfile" : "Bilgileriniz güncellenmiştir",
            "registerMailUsed" : "Mail adresiniz kullanımda. Lütfen farklı bir mail adresi kullanınız",
            "imgLoadError" : "Resimler yüklenirken bir hata oluştu",
            "comments" : "Notlar",
            "add" : "Ekle"
        };
        break;
    case " de ":
        lang = {
            "cancel" : " Stornieren",
            "copy" : "Kopieren",
            "done" : "Übersetzung ",
            "copyURL" : "URL Kopieren",
            "cut" : "Schneiden",
            "no" : "Nein",
            "ok" : "Okay",
            "paste" : "Einfügen",
            "selectAll" : "Alle Auswählen",
            "untitled" : "Ohne Adelsrang",
            "yes" : "Ja",
            "sureToDelete" : "Sind Sie sicher zu löschen?",
            "networkError" : "Es hat einen Netzwerkfehler, bitte versuchen Sie es später noch einmal",
            "applicationError" : "Es ist ein nicht behandelter Anwendungsfehler gewesen, informieren Sie bitte Entwickler"
        };
        break;
    case " fi ":
        lang = {
            "cancel" : " Keskeytä",
            "copy" : "Kopioi",
            "done" : "Käännös ",
            "copyURL" : "Kopioi URL",
            "cut" : "Leikkaa",
            "no" : "Ei",
            "ok" : "OK",
            "paste" : "Liitä",
            "selectAll" : "Valitse Kaikki",
            "untitled" : "Nimetön",
            "yes" : "Kyllä",
            "sureToDelete" : "Haluatko varmasti poistaa?",
            "networkError" : "Tapahtui verkkovirhe. Yritä myöhemmin uudelleen",
            "applicationError" : "Tapahtui käsittelemätön virhe. Ilmoita sovelluksen kehittäjille"
        };
        break;
    }
    if (doNotify) {
        notifyLang();
    }
}