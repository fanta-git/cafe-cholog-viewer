export const getTimestampStr = (lag: number) => {
    if (lag >= 86400e3) return `${lag / 86400e3 | 0}日前`;
    if (lag >= 3600e3) return `${lag / 3600e3 | 0}時間前`;
    if (lag >= 60e3) return `${lag / 60e3 | 0}分前`;
    return `${lag | 0}秒前`;
};
