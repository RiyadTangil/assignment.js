//https://github.com/RiyadTangil/assignment.js
//task -1
function kilometerToMeter(kilometer) {
    // for bonus purpose
    if (typeof kilometer !== "number" || kilometer < 1) {
        var warningMessage = "enter a valid number";
        return warningMessage;
    }
    // main task
    else {
        var result = kilometer * 1000;
        return result;
    }
}


//task-2
function budgetCalculator(watch, phone, leptop) {

    // for bonus purpose

    if (typeof watch !== "number" || watch < 0) {
        var warningMessage = "enter a valid number";
        return warningMessage;
    }
    else if (typeof phone !== "number" || phone < 0) {
        var warningMessage = "enter a valid number";
        return warningMessage;
    }
    else if (typeof phone !== "number" || phone < 0) {
        var warningMessage = "enter a valid number";
        return warningMessage;
    }
    //main task

    else {
        var watchCost = watch * 50;
        var phoneCost = phone * 100;
        var leptopCost = leptop * 500;
        var totalCost = watchCost + phoneCost + leptopCost;
        return totalCost;
    }
}

// task-3

function hotelCost(days) {
    // for bonus purpose
    if (typeof days !== "number" || days < 1) {
        var element = "enter a valid number";
        return element;
    }
    // main task
    else {
        var totalCost = 0;
        if (days <= 10) {
            totalCost = days * 100;
        }
        else if (days <= 20) {
            var firstTenDays = 10 * 100;
            var remaining = days - 10;
            var secondTenDays = remaining * 80;
            totalCost = firstTenDays + secondTenDays;
        }
        else {
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remaining = days - 20;
            var remainingDays = remaining * 50;
            totalCost = firstTenDays + secondTenDays + remainingDays;
        }
        return totalCost;
    }
}

// //task-4
function megaFriend(name) {
    var largeName = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        // for bonus purpose
        if (typeof element !== 'string') {
            var warningMessage = "enter a valid name";
            return warningMessage;
        }
        // main task
        else if (element.length > largeName.length) {
            largeName = element;
        }
    }
    return largeName;
}

