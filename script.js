
        // Function to calculate water usage
        function calculateUsage() {
            // Get input values
            var householdMembers = parseFloat(document.getElementById('household_members').value);
            var showersPerDay = parseFloat(document.getElementById('showers_per_day').value);
            var toiletFlushes = parseFloat(document.getElementById('toilet_flushes').value);
            var laundryFrequency = parseFloat(document.getElementById('laundry_frequency').value);
            var dishwashingFrequency = parseFloat(document.getElementById('dishwashing_frequency').value);

            // Calculate daily usage (you can adjust these values as needed)
            var dailyUsage = (showersPerDay * 20) + (toiletFlushes * 3) + (laundryFrequency * 15) + (dishwashingFrequency * 5);

            // Calculate monthly and yearly usage
            var monthlyUsage = dailyUsage * 30;
            var yearlyUsage = monthlyUsage * 12;

            // Display results
            document.getElementById('daily_usage').innerText = dailyUsage + ' gallons';
            document.getElementById('monthly_usage').innerText = monthlyUsage + ' gallons';
            document.getElementById('yearly_usage').innerText = yearlyUsage + ' gallons';

            // Show the results section
            document.getElementById('result').style.display = 'block';
        }
