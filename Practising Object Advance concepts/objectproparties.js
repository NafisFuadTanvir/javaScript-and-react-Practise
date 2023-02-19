const Nafis={
name:"nafis fuad tanvir",
id:201002437,
major:"cse",
iscleand: true
};

//getting all properties name
const holder= Object.keys(Nafis);
console.log(holder);
//getting all properties value
const values= Object.values(Nafis);
console.log(values);

//getting paired entitis

const entitis= Object.entries(Nafis);
console.log(entitis);


// // seal gala kore dilam, r kew change korte parbena kicu, notun property o add kora jabena. sudu value change kore jabe
// Object.seal(Nafis);

// Object.freeze(Nafis);
// kiccu change add delete kora jabena

//deleteing a object property
delete Nafis.iscleand;
console.log(Nafis);