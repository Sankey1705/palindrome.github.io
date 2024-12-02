const form = document.querySelector('form')

form.addEventListener("submit", function(e){
    e.preventDefault()

    const str = document.querySelector('#val').value
    const result = document.querySelector('.result')
    let filterstr = str.replace(/[^A-Z0-9]/ig, "");
    console.log(filterstr)
    let reverstr= filterstr.split("").reverse().join("");
    console.log(reverstr)
    if(filterstr != reverstr){
        result.innerHTML = `NO, <span id="nopaline">${filterstr}</span> is not palindrome`
    }else {
        result.innerHTML = `YES, <span id="paline">${filterstr}</span> is palindrome`
    }


})