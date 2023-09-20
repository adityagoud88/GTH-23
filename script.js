
let dailyUsage =0
let monthlyUsage=0
let yearlyUsage=0


function calculateUsage() {


    console.log("im working2")
    let householdMembers = document.getElementById('household_members');
    let showersPerDay = parseFloat(document.getElementById('showers_per_day').value);
    let toiletFlushes = parseFloat(document.getElementById('toilet_flushes').value);
    let laundryFrequency = parseFloat(document.getElementById('laundry_frequency').value);
    let dishwashingFrequency = parseFloat(document.getElementById('dishwashing_frequency').value);
    dailyUsage = (showersPerDay * 20) + (toiletFlushes * 3) + (laundryFrequency * 15) + (dishwashingFrequency * 5);
    monthlyUsage = dailyUsage * 30;
    yearlyUsage = monthlyUsage * 12;
    console.log(dailyUsage)
    console.log(monthlyUsage)
    console.log(yearlyUsage)
    console.log(householdMembers)
    document.getElementById('daily_usage').innerHTML="Daily Usage: "+dailyUsage+"gallons"
    document.getElementById("monthly_usage").innerHTML="Monthly Usage: "+monthlyUsage+"gallons";
    document.getElementById("yearly_usage").innerHTML="Yearly Usage: "+yearlyUsage+"gallons";
            
}

