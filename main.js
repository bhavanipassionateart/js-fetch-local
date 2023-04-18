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