const total = new Map()

total.set('car', 688)
total.set('Gym', 25)
total.set('T-Mobile', 30)
total.set('Ring', 3)
total.set('MidJourney', 10)
total.set('ChatGPT', 20)
total.set('Cleaner', 5)

let i = 0

for (let value of total.values()) {
    i += value;
}

console.log(i);
