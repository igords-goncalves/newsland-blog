export function cutDescription(description: string) {
    const text = description.trim().split(/\s+/);
    const sumary = text.slice(0, 40).join(' ');

    return text.length > 40 ? sumary + '...' : sumary;
}
