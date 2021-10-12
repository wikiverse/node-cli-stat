const sum = numbers => {
    return numbers.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
}

const avg = numbers => {
    return sum(numbers) / numbers.length;
}

const max = numbers => {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

// exports.sum = sum;
// exports.avg = avg;
// exports.max = max;

module.exports = {
    sum,
    avg,
    max
};