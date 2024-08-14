let i = 1;
t = 0;
while (true) {
    t = (t + 10000000 * 12) + 5 / 100 * (t + 10000000 * 12);
    if (t >= 450000000) {
        break
    }
    i++
}
console.log(i);