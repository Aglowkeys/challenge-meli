export const formatDecimals = (number) => {
    if (number === 0) return '00';
    if (number < 10) return 0 + '' + number;
    return number + '';
};
