function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    let num = 0;
    startTime.forEach((start, index) => {
        const end = endTime[index];

        if (queryTime >= start && queryTime <= end) {
            num++;
        }
    });

    return num;
}

function test(startTime: number[], endTime: number[], queryTime: number) {
    const result = busyStudent(startTime, endTime, queryTime);
    console.log(result);
}
test([1, 2, 3], [3, 2, 7], 4);
test([4], [4], 4);
test([4], [4], 5);
test([1, 1, 1, 1], [1, 3, 2, 4], 7);
test([9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5);
