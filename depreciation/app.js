function calculateInvestmentReturns() {
    var propertyType = document.getElementById('propertyType').value;
    var totalInvestment = document.getElementById('totalInvestment').value;
    var monthlyIncome = document.getElementById('monthlyIncome').value;
    
    var usefulLife = propertyType === 'residential' ? 27.5 : 39; // 27.5 years for residential, 39 years for commercial
    var annualDepreciation = totalInvestment / usefulLife;

    // Calculate annual income from monthly income
    var annualIncome = monthlyIncome * 12;

    // Assume a 10% standard deduction for expenses
    var expenses = annualIncome * 0.10;
    var netAnnualReturn = annualIncome - expenses;
    var roi = (netAnnualReturn / totalInvestment) * 100;

    document.getElementById('result').innerHTML = "Annual Depreciation: $" + annualDepreciation.toFixed(2) +
                                                  "<br>Annual Income: $" + annualIncome.toFixed(2) +
                                                  "<br>ROI (after 10% expenses): " + roi.toFixed(2) + "%";
}
