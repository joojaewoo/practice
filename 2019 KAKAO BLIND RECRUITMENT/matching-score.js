const solution = (word, pages) => {
  const answer = {};
  pages.map((page, index) => {
    const myUrl = page.match(/<meta([^>])*content([^>])*>/gi)[0].match(/http(s)?:[^\s^>^"]+/g)[0];
    const link = (page.match(/<a href="([^>])+>/g) || []).map(
      (link) => link.match(/http(s)?:[^\s^>^"]+/g)[0],
    );
    const wordNum = findNum(page, word);
    answer[myUrl] = {
      index,
      outLink: link,
      outLinkNum: link.length == 0 ? 0 : wordNum / link.length,
      num: wordNum,
    };
  });
  for (let i in answer) {
    for (let j in answer) {
      if (i !== j) {
        answer[j].outLink.filter((link) =>
          link === i ? (answer[i].num += answer[j].outLinkNum) : '',
        );
      }
    }
  }
  let max = -1;
  let index = 0;
  for (let i in answer) {
    if (max < answer[i].num) {
      max = answer[i].num;
      index = answer[i].index;
    }
  }
  return index;
};

const findNum = (page, word) => {
  page = page.toLowerCase();
  word = word.toLowerCase();
  let answer = 0;
  let idx = page.indexOf(word);
  while (idx != -1) {
    if (!page.charAt(idx - 1).match(/[a-z]/) && !page.charAt(idx + word.length).match(/[a-z]/))
      answer++;
    idx = page.indexOf(word, idx + 1);
  }
  return answer;
};

console.log(
  solution('blind', [
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://a.com"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href="https://b.com"> Link to b </a>\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://b.com"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href="https://a.com"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href="https://c.com"> Link to c </a>\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://c.com"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href="https://a.com"> Link to a </a>\n</body>\n</html>',
  ]),
);
