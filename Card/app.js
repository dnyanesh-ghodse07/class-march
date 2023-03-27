const close = document.getElementsByClassName('close')[0];
const card = document.getElementsByClassName('card')[0];
const list = document.getElementById('list');

close.addEventListener('click', function(){
    card.style.display = 'none';
})

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        console.log(element)
        const a = document.createElement('div').innerHTML = element.title;
        list.append(a)
    });
})
.catch(err => console.error(err));

