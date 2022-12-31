const url = "https://crudcrud.com/api/49d1573c69714541998de9e55d79698d/data"



async function savetoLocalstorage(event) {
    event.preventDefault();

    let userDetails = {
        My_Amount: document.getElementById('amount').value,
        Description: document.getElementById('dish').value,
        table: document.getElementById('tab').value

    }

    let userDetails_serialized = JSON.stringify(userDetails)

    // localStorage.setItem(userDetails.My_Expense_Amount , userDetails_serialized)
    const data = await axios.post(url, userDetails)
    console.log(data);

    document.getElementById('amount').value = ""
    document.getElementById('dish').value = ""
    document.getElementById('tab').value = ""




}










function deleteUser(amount) {
    let child = document.getElementById(amount)
    let parent = document.getElementById('ul')
    parent.removeChild(child)

}




async function deleteUser(Id) {
    try {
        const deleteNow = await axios.delete(`${url}/${Id}`)
    }
    catch(error){
        console.log(error)
    }
 }















window.addEventListener(`DOMContentLoaded`, async () => {
    try {
        const response = await axios.get(url)
        console.log(response.data)
        const d = document.getElementById(`ul`);
        let li = ""
       

        for (let i = 0; i < response.data.length; i++) {
            li += `<h3>${response.data[i].table}</h3><li id="${response.data[i].My_Amount}"> ${response.data[i].My_Amount},${response.data[i].Description}
            <button onclick = deleteUser('${response.data[i]._id}')> Delete </button> 
            </li>`
            
           
            d.innerHTML =  li

        }

    }
    catch (error) {
        console.log(error);
    }


})



