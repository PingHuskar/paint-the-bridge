let score = 0
let current_bridge = 1
const container = document.querySelector(`.container`);

const bridges = [
    5,
    12,
    31,
    79,
    128,
    225,
    369,
    499,
    616,
    888,
    1000,
    1111,
    1224,
    1331,
    1428,
    1525,
    1632,
    1734,
    1839,
    1945,
    2052,
    2165,
    2277,
    2388,
    2500,
    2613,
    2724,
    2835,
    2946,
    3057,
    3168,
    3279,
    3390,
    3501,
    3612,
]

const add_score = (num) => {
    score += num
    console.log(score)
    if (score >= bridges[0]) {
        let this_bridge = document.getElementById(`b${current_bridge}`);
        this_bridge.style.background = `red`
        this_bridge.style.color = `red`
        this_bridge.removeEventListener(`click`, add_score, true);
        // document.getElementById(`b${current_bridge}`).style.visibility =
        //   "hidden";
          current_bridge++;
        container.innerHTML += `<marquee id="b${current_bridge}" behavior="alternate" direction="${
          score % 2 == 0 ? "left" : "right"
        }" scrollamount="${bridges[0]}">สะพาน</marquee>`;
        document
          .getElementById(`b${current_bridge}`)
          .addEventListener(`click`, () => {
            add_score(1);
          });
        bridges.shift()
        // console.log(bridges);
        // console.log(bridges.length)
        if (bridges.length === 1) {
            let this_bridge = document.getElementById(`b${current_bridge}`);
            this_bridge.style.background = `red`;
            this_bridge.style.color = `red`;
            this_bridge.removeEventListener(`click`, add_score, true);
            container.innerHTML += `<span style="color: red;">ทาสีสะพานเสร็จแล้ว ไปตอบกระทู้แรงค้านไร้อนาตคได้</span>`;
        }
    }
    
}

document.getElementById('b1').addEventListener(`click`, () => {
    add_score(1)
})
