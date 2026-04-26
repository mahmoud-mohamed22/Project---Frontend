/* ==========================================
   Budget Tracker - Dashboard Logic
   ========================================== */

// 1. استدعاء العناصر من الصفحة
const addExpenseBtn = document.querySelectorAll('.btn')[2]; // زرار إضافة مصروف
const addIncomeBtn = document.querySelectorAll('.btn')[1];  // زرار إضافة دخل

// 2. إضافة "Events" للزراير (عشان تحس بالضغط)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard Ready!");

    // مثال: لما تدوس على إضافة مصروف
    document.body.addEventListener('click', (e) => {
        if (e.target.innerText === '+ Add Expense') {
            handleNewEntry('Expense');
        }
        if (e.target.innerText === '+ Add Income') {
            handleNewEntry('Income');
        }
    });
});

// 3. وظيفة التعامل مع الإدخالات الجديدة
function handleNewEntry(type) {
    // حالياً بنطلع رسالة بسيطة، قدام هتحط "Pop-up" أو تفتح صفحة
    alert(`Opening Form to add new ${type}...`);
    
    /* هنا يا محمود في المستقبل هتعمل Fetch للباك إيند:
       fetch('https://api.yourbudgetapp.com/add', {
           method: 'POST',
           body: JSON.stringify({ type: type, amount: 0 })
       });
    */
}

// 4. وظيفة تحديث الأرقام (Dashboard Update)
function updateBalance(newAmount) {
    const balanceElement = document.querySelector('h2'); 
    balanceElement.innerText = `$${newAmount}`;
    balanceElement.classList.add('glow'); // خليه ينور لما يتغير
}