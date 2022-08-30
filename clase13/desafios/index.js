const getNum=()=>{
    return Math.floor(Math.random()*256)
}
class Color {
    get(){
        const color = `rgb(${getNum()},${getNum()},${getNum()})`
        return color
    }
}
const color = new Color()
console.log(color.get());