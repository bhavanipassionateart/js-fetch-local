/*Different ways of reading data from a source */
// promise chaining
function readFilePromise() {
fetch('customers.json')
.then(response =>{
if(!response.ok){
    throw new Error ('Fetch error: '+response.status);
}
return response.json();
})
.then(customers => {
    generateHTML(customers);
})
.catch(error => {
    console.log('Error:'+error);
});
}
async function readFileAsync() {
    let data = await fetch('customers.json');
    let customers = await data.json();
    generateHTML(customers);
}
async function readFileAsync2(){
    try {
        let data = await fetch('customers.json');
        let customers = await data.json();
        generateHTML(customers);
    } catch {
        console.log('Error,could not read from json file.');
    }
}

//Render HTML
function generateHTML(customers) {
    let html = '';
    for (let customer of customers) {
        html +=`
        <h3>${customer.firstname} ${customer.lastname}</h3>
        <p>${customer.firstname} works at ${customer.companyname}</p>
        `;
       
    }
    html += '<hr>';
    let customerDiv = document.createElement('div');
    customerDiv.innerHTML =html;
    document.querySelector('body').append(customerDiv);
}
readFilePromise();
readFileAsync();
readFileAsync2();