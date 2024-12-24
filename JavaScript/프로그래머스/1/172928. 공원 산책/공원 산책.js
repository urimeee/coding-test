function solution(park, routes) {
    // 공원의 크기 (세로 H, 가로 W)
    let max_H_value = park.length - 1;
    let max_W_value = park[0].length - 1;
    
    let location = [0, 0];
    // 시작 위치 찾기 (S 위치)
    for(let i = 0; i<park.length; i++){
        if(park[i].indexOf("S") > 0){
            console.log("start");
            location = [i, park[i].indexOf("S")];
        }
    }
    console.log(location);
        
    // 각 루트를 순차적으로 처리
    routes.forEach(route => {
        let command = route.split(" "); // 공백 기준으로 명령어와 숫자 분리
        let direction = command[0]; // 방향 (E, S, W, N)
        let length = Number(command[1]); // 이동 거리
        let canMove = true; // 장애물 여부 체크

        switch (direction) {
            case "E": // 동쪽
                let east = location[1] + length;
                
                if (east > max_W_value) {
                    console.log("E 경계를 벗어남");
                    break; // 경계를 벗어나면 이동하지 않음
                }
                
                // 장애물 체크
                for (let i = location[1]; i <= east; i++) {
                    if (park[location[0]][i] === "X") {
                        canMove = false; // 장애물이 있으면 이동 불가
                        break;
                    }
                }
                
                if (canMove) {
                    location[1] = east; // 이동
                }
                
                break;

            case "S": // 남쪽
                let south = location[0] + length;
                if (south > max_H_value) {
                    break; // 경계를 벗어나면 이동하지 않음
                }
                
                // 장애물 체크
                for (let i = location[0]; i <= south; i++) {
                    if (park[i][location[1]] === "X") {
                        canMove = false; // 장애물이 있으면 이동 불가
                        break;
                    }
                }
                if (canMove) {
                    location[0] = south; // 이동
                }
                break;

            case "W": // 서쪽
                let west = location[1] - length;
                if (west < 0) {
                    break; // 경계를 벗어나면 이동하지 않음
                }
                
                // 장애물 체크
                for (let i = location[1]; i >= west; i--) {
                    if (park[location[0]][i] === "X") {
                        canMove = false; // 장애물이 있으면 이동 불가
                        break;
                    }
                }
                if (canMove) {
                    location[1] = west; // 이동
                }
                break;

            case "N": // 북쪽
                let north = location[0] - length;
                if (north < 0) {
                    break; // 경계를 벗어나면 이동하지 않음
                }
                // 장애물 체크
                for (let i = location[0]; i >= north; i--) {
                    if (park[i][location[1]] === "X") {
                        canMove = false; // 장애물이 있으면 이동 불가
                        break;
                    }
                }
                if (canMove) {
                    location[0] = north; // 이동
                }
                break;
        }
    });

    return location;
}
