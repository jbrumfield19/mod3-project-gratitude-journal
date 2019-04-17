 class Entry {
     constructor (value1,value2,value3){
         this.div = document.createElement('div')
         this.div.setAttribute('class','card')
         const content = document.createElement('ol')
         const answer1 = document.createElement('li')
         const answer2 = document.createElement('li')
         const answer3 = document.createElement('li')
         this.value1 = value1
         this.value2 = value2
         this.value3 = value3
         answer1.innerText = value1
         answer2.innerText = value2
         answer3.innerText = value3
         entry.append(answer1,answer2,answer3)
         this.div.append(content)
     }
     render(){
         return this.div
     }
 }