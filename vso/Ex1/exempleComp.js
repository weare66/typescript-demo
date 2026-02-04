// let distance = 100;
// let upToNight = 50;
// let downToNight = 30;
// let current = 0;
// let days = 0;


// while(true) {
//     days++;
//     current += upToNight;
//     if (current >= distance) break;
//     current -= downToNight;
// }

// console.log(`Черепашка поднялась на ${days}-е сутки`);


let people = 10;
let handshakes = 0;


for (let i = 1; i <= people; i++) {
  // каждый новый человек здоровается с предыдущими
  handshakes += i - 1;
  
}

console.log(`Количество рукопожатий для ${people} человек: ${handshakes}`);
