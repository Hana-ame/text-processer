export class TextReader {
  s:string = ""
  as:string[] = []
  i:number = 0
  constructor(_s:string){
    this.s = _s
    this.as = this.s.split("\n")
    this.i = 0
  }
  next(readline:(s:string,i:number) => void){
    readline(this.as[this.i], this.i)
    this.i += 1
  }
  isEmpty() {
    return this.i >= this.as.length 
  }  
}

export class TextWriter {
  as:string[] = []
  constructor(){  }
  writeLine(line:string){
    this.as.push(line)
  }
  text(){
    return this.as.join("\n")
  }
  
}