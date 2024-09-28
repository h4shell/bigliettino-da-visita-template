function extractParams(url){
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search)
    const paramsObject = {};
    params.forEach((value, key) => {
        paramsObject[key] = value;
    });
    return paramsObject
}

const params = extractParams(window.location.href)

const yourName = document.querySelector('#name')
const type = document.querySelector('#type')
const tel = document.querySelector('#tel')
const email = document.querySelector('#email')
const website = document.querySelector('#website')
const color = document.querySelector('#color')
const photo = document.querySelector('#photo')
const wallpapers = document.querySelectorAll('.wallpaper')



yourName.innerText = params.name
type.innerText = params.type
tel.innerText = `+${params.tel}`
email.innerText = params.email
color.classList.add(`bg-${params.color}-700`)
photo.src = params.photo


if(params.website === undefined){
    const itemEmail = document.querySelector('#item-website')
    itemEmail.remove()
} else {
    website.innerText = params.website
    document.querySelector('#website-link').href = `http://${params.website}`
}

if(params.linkedin === undefined){
    const linkedin = document.querySelector('#linkedin')
    linkedin.remove()
} else {
    linkedin.href = params.linkedin
}

if(params.facebook === undefined){
    const facebook = document.querySelector('#facebook')
    facebook.remove()
} else {
    facebook.href = params.facebook
}

if(params.github === undefined){
    const github = document.querySelector('#github')
    github.remove()
} else {
    github.href = params.github
}

wallpapers.forEach((el) => {
    el.style.backgroundImage = `url('${params.bg}')`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundRepeat = 'no-repeat';
});