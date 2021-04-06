const solution = (dirs) => {
    const visited = Array.from(Array(21),()=>Array(21).fill(false));
    const dir = {U:{x:-2,y:0},L:{x:0,y:-2},R:{x:0,y:2},D:{x:2,y:0}};
    const maxRange = 20;
    const ans = dirs.split('').reduce((acc,cur)=>{
        const {curX,curY,count}= acc;
        const nx = curX + dir[cur].x;
        const ny = curY + dir[cur].y;
        const vx = curX + dir[cur].x/2;
        const vy = curY + dir[cur].y/2;
        if(nx<0|| nx>maxRange || ny<0||ny>maxRange)
            return acc;
        if(visited[vx][vy]) return {curX:nx,curY:ny,count};
        visited[vx][vy]=true;
        return {curX:nx,curY:ny,count:count+1};   
    },{curX:10,curY:10,count:0});
    return ans.count
}