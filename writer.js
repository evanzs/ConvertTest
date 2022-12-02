
const basics = require("./basics");
const Levels = require("./constants");
const scales = require("./scales");


 class Writer{
   
    constructor(dollars){
        this.dollars = dollars || [];
        this.levels = Levels
        this.basics = basics;
        this.scales=scales
    }


    print(){
        if(!this.dollars.length)
            return "";

        let output="";
        // this.dollars.map((value, index) => {
        //     if (index === this.levels.MILLIAN && value != 0)
        //         output += this.basics[value] + this.scales[index - 1];
        //     if (index === this.levels.HUNDRED_THOUSAND && value != 0)
        //         output += this.basics[value] + this.scales[index - 2];
        //     if (index === this.levels.HUNDRED && value != 0)
        //         output += this.basics[value] + this.scales[index - 3];
        //     if (index === this.levels.THOUSAND && value != 0)
        //         output += this.basics[value] + this.scales[index - 1];
        //     if (index === this.levels.DECIMAL && value != 0)
        //         output += this.basics[value] + this.scales[index - 1];

        // })
        output+= this.dollars.map((value,index)=> this.solve(value,index) )
        
        return output;
    }

    solve(value,index){       
        switch(index){
            case this.levels.MILLIAN: return this.isMillion(value,index)            
            case this.levels.HUNDRED_THOUSAND: return this.isHundredThound(value,index)                
            case this.levels.THOUSAND: return this.isThound(value,index)                
            case this.levels.HUNDRED: return this.isHoundred(value,index)  
        }
    }

    isMillion(value,index){
        if(value!==0 )
            return this.basicFill(value, index, 1);
    }
    isHundredThound(value,index) {
          if(value!==0 )
              return this.basicFill(value, index, 0);
    }
    isThound(value,index) {
          if(value< 10 && value >0){
              return this.basicFill(value[1], index, 2);
          }
        else if (value >= 10 && value < 20) {
            return this.basicFill(value, index, 2);
        }
        else{
              return this.basicFill(value, index, 2);
        }
           
    }
    isHoundred(value,index) {
          if(value!==0 )
              return this.basicFill(value, index, 2);
    }
    
    basicFill(value,index,aux){
        //nao sei que nome da pra essa variavel aux      
        return this.basics[value]+ " " +this.scales[index - aux]
    }


}
module.exports =Writer   


