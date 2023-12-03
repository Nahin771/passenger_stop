let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
console.log(countEl)


let count = 0;

console.log(saveEl)

function increment() {
    count += 1;
    countEl.textContent = count;

}

function save() {
    let pEntries = count + " - ";
    saveEl.textContent += pEntries;
    console.log(count)
    countEl.textContent = 0;
    count = 0;
}

