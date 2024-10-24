function getDaysCountInMonth(year, month, dayOfWeek) {
    let count = 0;
    const daysInMonth = new Date(year, month, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const currentDay = new Date(year, month - 1, day);
        if (currentDay.getDay() === dayOfWeek) {
            count++;
        }
    }

    return count;
}

function getDayOfWeekIndex(day) {
    const daysOfWeek = {
        'الأحد': 0,
        'الاثنين': 1,
        'الثلاثاء': 2,
        'الأربعاء': 3,
        'الخميس': 4,
        'الجمعة': 5,
        'السبت': 6
    };
    return daysOfWeek[day];
}

function calculateDays() {
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const firstDay = document.getElementById("firstDay").value;
    const secondDay = document.getElementById("secondDay").value;

    const firstDayIndex = getDayOfWeekIndex(firstDay);
    const secondDayIndex = getDayOfWeekIndex(secondDay);

    if (isNaN(year) || isNaN(month)) {
        document.getElementById("result").innerHTML = "الرجاء إدخال بيانات صحيحة.";
    } else {
        const firstDayCount = getDaysCountInMonth(year, month, firstDayIndex);
        const secondDayCount = getDaysCountInMonth(year, month, secondDayIndex);

        document.getElementById("result").innerHTML = 
            `عدد أيام ${firstDay} في الشهر ${month} من السنة ${year} هو: ${firstDayCount} <br>` +
            `عدد أيام ${secondDay} في الشهر ${month} من السنة ${year} هو: ${secondDayCount}`;
    }
}