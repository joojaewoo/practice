const solution = (bridge_length, weight, truck_weights) => {
  const arr = [];
  arr.push({ location: 1, weight: truck_weights[0] });
  let totalWeight = truck_weights.shift();
  let time = 1;
  while (arr.length !== 0) {
    for (let truck of arr) {
      if (truck.location === bridge_length) {
        const temp = arr.shift();
        totalWeight -= temp.weight;
        break;
      }
    }
    if (totalWeight + truck_weights[0] <= weight) {
      const truckWeight = truck_weights.shift();
      totalWeight += truckWeight;
      arr.push({ location: 0, weight: truckWeight });
    }
    for (let i of arr) {
      i.location++;
    }
    time++;
  }
  return time;
};

solution(2, 10, [7, 4, 5, 6]);
