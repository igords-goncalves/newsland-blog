export function cutDescription(description: string) {
    if (!description) {
        return '';
    }

    const text = description.trim().split(/\s+/);
    const sumary = text.slice(0, 40).join(' ');

    return text.length > 40 ? sumary + '...' : sumary;
}
