const url = "https://crudcrud.com/api/df438f2cb43d400fbe27a201dd6d57c8/data"



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
        let li1 = ""
        let li2 =""
        let li3 = ""
        const table1=document.getElementById('Table1')
        const table2=document.getElementById('Table2')
        const table3=document.getElementById('Table3')

            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].table=="Table 1") {
                    li1 += `<li id="${response.data[i].My_Amount}"> ${response.data[i].My_Amount},${response.data[i].Description}
                    <button onclick = deleteUser('${response.data[i]._id}')> Delete </button> 
                    </li>`
                }
                 
                if (response.data[i].table=="Table 2") {
                    li2 += `<li id="${response.data[i].My_Amount}"> ${response.data[i].My_Amount},${response.data[i].Description}
                    <button onclick = deleteUser('${response.data[i]._id}')> Delete </button> 
                    </li>`
                }
                if (response.data[i].table=="Table 3") {
                    li3 += `<li id="${response.data[i].My_Amount}"> ${response.data[i].My_Amount},${response.data[i].Description}
                    <button onclick = deleteUser('${response.data[i]._id}')> Delete </button> 
                    </li>`
                }
                
            }
                    
           table1.innerHTML = li1 ;
           table2.innerHTML = li2 ;
           table3.innerHTML = li3 ;
            


    }


    catch (error) {
        console.log(error);
    }


})



