function merge(intervals) {
    const len = intervals.length;
    if (len <= 1) {
        return intervals;
    }
    let result = [intervals[0]];
    for (let i = 1; i < len; i++) {
        const [istart, iend] = intervals[i];
        const resultLen = result.length;
        let j = 0;
        while (j < resultLen) {
            let [start, end] = result[j];
            if (
                (istart >= start && istart <= end) ||
                (iend >= start && iend <= end) ||
                (start >= istart && start <= iend) ||
                (end >= istart && end <= iend)
            ) {
                start = Math.min(istart, start);
                end = Math.max(iend, end);
                result[j] = [start, end];
                break;
            }
            j++;
        }
        if (j >= resultLen) {
            result.push([istart, iend]);
        }
    }
    return result;
}

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ])
);
console.log(
    merge([
        [1, 4],
        [4, 5],
    ])
);
console.log(
    merge([
        [2, 3],
        [4, 5],
        [6, 7],
        [8, 9],
        [1, 10],
    ])
);
