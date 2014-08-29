function dlgLogin_imgClose_OnTouchEnded(e) {
    Dialogs.dlgLogin.close();
}
function dlgLogin_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Dialogs.dlgLogin.close();
    }
}