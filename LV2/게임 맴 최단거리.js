const solution = (maps) => {
    let ans = -1;
    const queue = [];
    const width = maps[0].length;
    const height = maps.length;
    const visited = Array.from(Array(height),()=>Array(width).fill(false));
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];
    queue.push({x:0,y:0,count:1});
    visited[0][0]=true;
    while(queue.length){
        const {x,y,count} = queue.shift();
        if(y===width -1 && x===height-1){
            ans = count;
            break;
        }
        for(let i =0; i<4;i++){
            const nx = x+dx[i];
            const ny = y+dy[i];
            if(nx>=0&& nx<height&& ny>=0&&ny<width && maps[nx][ny] === 1&& !visited[nx][ny]){
                visited[nx][ny]= true;
                queue.push({x:nx,y:ny,count:count+1});
            }
        }
    }
    return ans;
}