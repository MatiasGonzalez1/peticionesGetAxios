//PRACTICA PARA MINIMIZAR EL TIEMPO DE PETICION CON AXIOS

const button = document.getElementById('button');

//peticion mediante js
// button.addEventListener('click', ()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))

//         .then(res => res.json())
//         .then(res => {
//             const list = document.getElementById('list');
//             const fragment = document.createDocumentFragment();
//             for (const userInfo of res){
//                 const listItem = document.createElement('LI')
//                 listItem.textContent = `${userInfo.id} - ${userInfo.name}`
//                 fragment.appendChild(listItem);
//             }
//             list.appendChild(fragment);
//         })
// })



//peticion mediante axios
button.addEventListener('click',() => {
    axios({
        method:'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
    .then(res => {
                    const list = document.getElementById('list');
                    const fragment = document.createDocumentFragment();
                    for (const userInfo of res.data){
                        const listItem = document.createElement('LI')
                        listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                        fragment.appendChild(listItem);
                    }
                    list.appendChild(fragment);
                }).catch(err =>console.log(err)); //se atrapa el error y se imprime por consola
})