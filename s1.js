function isEmpty(str) { return (!str || str.length === 0); }

function validate(form) {
    checkStringAndFocus(form.elements["f_imie"], "Błędne imie");
    checkStringAndFocus(form.elements["f_nazwisko"].value, "Błędne nazwisko");
    checkString(form.elements["f_kod"].value, "zły kod");
    checkString(form.elements["f_ulica"].value, "zła ulica");
    checkString(form.elements["f_miasto"].value, "zła ulica");
    checkString(form.elements["f_email"].value)
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

function checkEmail(str)
{
    if (isWhiteSpace(str)) alert("Podaj właściwy e-mail");
    else
        {
            at = str.indexOf("@");
            if (at < 1)
            {
                alert("Nieprawidłowy e-mail");
                return false;
            } else
                {
                    var l = -1;
                    for (var i = 0; i < str.length; i++)
                    {
                        var c = str.charAt(i);
                        if (c == ".") l = i;
                    }
                    if ((l < (at + 2)) || (l == str.length - 1)) {
                        alert("Nieprawidłowy e-mail");
                        return false;
                    }

                } return true;
        }
}

function checkString(str, msg)
{
    if (isWhiteSpace(str) || isEmpty(str) || checkEmail(str))
    {
        alert(msg);
        return false;
    } else
        return true;
}

function checkStringAndFocus(obj, msg)
{
    var str = obj.value;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpace(str) || isEmpty(str))
    {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        startTimer(errorFieldName);
        return false;
    } else
        return true;
}

errorField = "";
function startTimer(fName)
{
    errorField = fName;
    window.setTimeout("clearError(errorField)", 5000);
}
function clearError(objName)
{
    document.getElementById(objName).innerHTML = "";
}

