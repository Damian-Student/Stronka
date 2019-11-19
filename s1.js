function isEmpty(str) { return (!str || str.length === 0); }

function validate(form) {
    checkString(form.elements["f_imie"].value, "Wpisz imie");
    checkString(form.elements["f_nazwisko"].value, "Wpisz nazwisko");
    checkString(form.elements["f_email"].value, "Wpisz e-mail");
    checkEmail(form.elements["f_email"].value);
}

function isWhiteSpace(str)
{
    var i, ws = "\t\n\r ";
    for (i = 0; i < str.length; i++)
    {
        var c = str.charAt(i);
        if (ws.indexOf(c) > -1)
        {
            return true;
        }
    } return false;
}

function checkEmail(str) {
    if (isWhiteSpace(str)) alert("Podaj właściwy e-mail"); else {
        at = str.indexOf("@");
        if (str.length>0 && at < 1) {
            alert("Nieprawidłowy e-mail");
            return false;
        } else {
            var l = -1;
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                if (c == ".") l = i;
            }
            if ((str.length>0 && (l < (at + 2)) || (l == str.length - 1))) alert("Nieprawidłowy e-mail");
        }
        return true;
    }
}

function checkString(str, msg)
{
    if (isWhiteSpace(str) || isEmpty(str))
    {
        alert(msg);
        return false;
    } else
        return true;
}

