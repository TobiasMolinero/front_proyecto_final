
export function firstCharToUpperCase(month: string): string {
    let monthText = month
    monthText = monthText.charAt(0).toUpperCase() + monthText.slice(1);
    return monthText
}
