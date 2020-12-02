const solution = (n, stations, w) => {
  let sum = 0;
  let answer = 0;
  while (sum < n) {
    if (stations.length === 0 || sum + w + 1 < stations[0]) {
      // 남은 기지국이 없거나 기지국의 위치가 내가 세울 기지국의 위치보다 멀리 있을때 w+1자리에 기지국을 세우고 2w+1만큼 전파 통신되는 거리 확보
      sum += 2 * w + 1;
      answer++;
    } else {
      sum = stations.shift() + w; // 기지국이 있을 때 기지국의 위치 + 전파 통신 되는 거리 확보
    }
  }
  return answer;
};

console.log(solution(16, [9], 2));
