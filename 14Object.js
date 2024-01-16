//var o={} object
// var a=[] array

// data is stored in object as key : value pair
// key may be string or Symbolls
// value is a any type of data


var list={
    name:"arman",
    roll:56,
    marks:"9.2 cgpa"
}
console.log(list)//{ name: 'arman', roll: 56, marks: '9.2 cgpa' }
console.log(list.name)// arman access by dot notation
console.log(list["roll"])// 56 acess by square bracess notation


// function in object

var data={
    regard:"helo!",
    display:function(){
        console.log(`${this.regard} world`);
    }
}
data.display();//helo! world


var seriesname={
    turkish:"marasale",
    indian:"betal",
    pakistan:"suno chanda"
}

for(key in seriesname){
    console.log(`${key} keys of series`)
}
// turkish keys of series
// indian keys of series
// pakistan keys of series


// nested Object

var student={
    name:"arman ahad",
    rool:56,
    marks:{
      c:94,
      java:90,
      javascript:99
    }
}
 console.log(student.marks)//{ c: 94, java: 90, javascript: 99 }
 console.log(student.marks.java)//90
 console.log(student.marks["c"])//94 acsess by square notation

 // array of objects


 var arr=[
    {
        name: "The Avengers",
        rating: 5,
        type: "Action", 
    },
    {
        name: "Harry potter",
        rating: 9,
        type: "Action",
      },
      {
        name: "Frozen",
        rating: 9,
        type: "Fantasy",
      }
 ]


 arr.forEach((data)=>{
    console.log(data);
 })
//  { name: 'The Avengers', rating: 5, type: 'Action' }
// { name: 'Harry potter', rating: 9, type: 'Action' }
// { name: 'Frozen', rating: 9, type: 'Fantasy' }

arr.forEach((data)=>{
    console.log(data["name"]);
 });
//  The Avengers
// Harry potter
// Frozen


console.log(arr[0].rating)//5