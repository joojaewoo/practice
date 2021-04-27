const solution = (cacheSize, cities) => {
  if (cacheSize === 0) return cities.length * 5;
  const cache = [];
  const upperCities = cities.map((item) => item.toUpperCase());
  let ans = 0;
  for (let i = 0; i < upperCities.length; i++) {
    const idx = cache.indexOf(upperCities[i]);
    if (idx !== -1) {
      cache.push(...cache.splice(idx, 1));
      ans += 1;
    } else {
      ans += 5;
      if (cache.length >= cacheSize) {
        cache.shift();
      }
      cache.push(upperCities[i]);
    }
  }
  return ans;
};
