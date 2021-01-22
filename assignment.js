//Repository link:  https://github.com/Mr-OmarFaruk/JavascriptAssignment  

//Q:1) kilometer to meter convert

function kilometerToMeter(kiloMeter){
    var meter = 0;
    if(kiloMeter > 0){
        meter = kiloMeter*1000;
    }
    else{
        console.log("You enter wrong value");
    }
    return meter;
}

var totalMeter = kilometerToMeter(197);
console.log(totalMeter);




//Q:2) budgetCalculator 

function budgetCalculator( watch, phone, laptop){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalCost = 0;

    if(watch<0 || phone<0 || laptop<0){
        console.log("Your enter a negetive number.");
    }
    else{
        var watchCost=watchPrice*watch;
        var phoneCost=phonePrice*phone;
        var laptopCost=laptopPrice*laptop;
        totalCost = watchCost+phoneCost+laptopCost;
    }
    return totalCost;
}

var needBudget = budgetCalculator(1,2,1);
console.log(needBudget);




//Q:3) Hostel stay cost calculation

function hotelCost(days){
    var cost = 0;
    if(days <= 0){
        console.log("You did not enter a positive number");
    }
    else if(days <= 10){
        cost=days*100;
    }
    else if(days <= 20){
        var firstPeriod = 10*100;
        var remaining = days-10;
        var secondPeriod = remaining*80;
        cost = firstPeriod+secondPeriod;
    }
    else{
        var firstPeriod = 10*100;
        var secondPeriod = 10*80;
        var remaining = days-20;
        var thirdPeriod = remaining*50;
        cost = firstPeriod+secondPeriod+thirdPeriod;
    }
    return cost;
}

var totalCost = hotelCost(11);
console.log(totalCost);




//Q:4) Find biggest name of a friend in array

function megaFriend(friendsName) {
    var longestName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (longestName.length < friendsName[i].length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}

var getMegaFriend = megaFriend(["Mahabub","Abdul Karim","Omar","Tanimul islam"]);
console.log(getMegaFriend);
