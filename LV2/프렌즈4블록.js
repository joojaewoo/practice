const solution = (m, n, board) => {
    let map = [];
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < m; j++) {
            row.push(board[j].charAt(i));
        }
        map.push(row);
    }
    const arr = [];
    while (true) {
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < m - 1; j++) {
                if (map[i][j] !== 0 && map[i][j] === map[i + 1][j + 1] && map[i][j] === map[i][j + 1] && map[i][j] === map[i + 1][j]) {
                    arr.push({ x: i, y: j });
                }
            }
        }
        if (!arr.length) break;
        while (arr.length) {
            const { x, y } = arr.shift();
            map[x][y] = -1;
            map[x + 1][y] = -1;
            map[x][y + 1] = -1;
            map[x + 1][y + 1] = -1;
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (map[i][j] === -1) {
                    ans++;
                    map[i].splice(j, 1);
                    map[i].unshift(0);
                }
            }
        }
    }
    return ans;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]))