var heroName = "No Hero Selected"
function printHeroName(name, img) {
    heroName = name
    document.getElementById('heroName').innerHTML = heroName
    document.getElementById('heroImage').style.background = 'url('+img+')'
    document.getElementById('heroImage').style.backgroundSize = "cover"
    console.log("Name: " + name, "Src: " + img)
}

export default printHeroName
export { heroName }