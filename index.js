 Writer = require("./writer")

const main = ()=>{
    let dollars = [7, 3, 5, 2, 4]
    var write = new Writer(dollars)   
    var result = write.print()
    console.log(result)
}
main()
