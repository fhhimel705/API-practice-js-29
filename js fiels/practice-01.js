const person = {found: 2, message: "Found 2 persons",
result: [{name: {common: "John",fullName: ["John", "Doe"]},
age: 32,
isMale: false,
address: {
street: "13/A St Joseph",
house: 10,},
},
{
name: {
common: "Sheikh",
fullName: ["Sheikh", "Farid"]
},
age: 33,
isMale: false,
address: {
street: "13/A St Lucia",
house: 11,},
},
]
};
console.log(person);
const showDetails = () =>{
    const detilSection = document.getElementById('details-section');
    detilSection.innerHTML =`
    <div class="card border rounded-md">
    <p class="bg-slate-100 py-2 px-5 rounded-md border">Person Name : ${person.result[0].name.common} </p>
    <p class="my-4 px-5">Age: ${person.result[0].age}</p>
    <p class="mb-4 px-5">Street: ${person.result[0].address.street}</p>
    </div>
    <div class="card border rounded-md">
    <p class="bg-slate-100 py-2 px-5 rounded-md border">Person Name :  ${person.result[1].name.common} </p>
    <p class="my-4 px-5">Age:  ${person.result[1].age} </p>
    <p class="mb-4 px-5">Street:  ${person.result[1].address.street} </p>
    </div>
    `;
};
showDetails();