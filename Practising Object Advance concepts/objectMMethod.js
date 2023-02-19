const student={
    id:201002437,
    Name: "Nafis",
    subject:'Cse',
    isRich: false,
    major: ["Web application","Machine Learning","calculas"],
    bestfriend: {
             id:201002437,
             subject:'cse'
    },
  takeExam: function(){
    console.log(this.Name,"taking exam");
  }
}


//method calling from function
student.takeExam();