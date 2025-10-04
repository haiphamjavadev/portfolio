export function getDuration(startDate, endDate = new Date()) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end < start) {
        throw new Error("End date must be after start date");
    }

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    // Nếu tháng âm thì trừ 1 năm, cộng thêm 12 tháng
    if (months < 0) {
        years--;
        months += 12;
    }

    // Nếu ngày âm thì trừ 1 tháng, tính ngày còn lại
    if (days < 0) {
        months--;
        if (months < 0) {
            years--;
            months += 12;
        }
        days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }

    let result = "";
    if (years > 0) result += `${years}.`;
    if (months > 0) result += `${months}`;
    if (days > 0) result += "+";

    return result.trim() || "0 Month";
}