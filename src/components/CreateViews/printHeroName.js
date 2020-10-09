var heroName = "No Hero Selected"
function printHeroName(name, img) {
    console.log("Selected Hero: " + name)
    console.log("Selected Image: " + img)
    heroName = name
    document.getElementById('heroName').innerHTML = heroName
    document.getElementById('heroImage').style.background = 'url('+img+')'
    document.getElementById('heroImage').style.backgroundSize = "cover"
    console.log("Name: " + name, "Src: " + img)

    var abilityStr = "https://api.playfault.com/imagecdn/abilities/"
    
    abilityStr += heroName
    
    console.log("Ability String: " + abilityStr)

    var pImg = abilityStr + "/P.png"
    var qImg = abilityStr + "/Q.png"
    var eImg = abilityStr + "/E.png"
    var rmbImg = abilityStr + "/RMB.png"
    var lmbImg = abilityStr + "/LMB.png"
    var rImg = abilityStr + "/R.png"
   
    document.getElementById('qImg').style.background = 'url('+qImg+')'
    document.getElementById('qImg').style.backgroundSize = "cover"

    document.getElementById('pImg').style.background = 'url('+pImg+')'
    document.getElementById('pImg').style.backgroundSize = "cover"

    document.getElementById('eImg').style.background = 'url('+eImg+')'
    document.getElementById('eImg').style.backgroundSize = "cover"

    document.getElementById('rImg').style.background = 'url('+rImg+')'
    document.getElementById('rImg').style.backgroundSize = "cover"

    document.getElementById('rmbImg').style.background = 'url('+rmbImg+')'
    document.getElementById('rmbImg').style.backgroundSize = "cover"

    document.getElementById('lmbImg').style.background = 'url('+lmbImg+')'
    document.getElementById('lmbImg').style.backgroundSize = "cover"

    console.log("P Img: " + pImg)


}

export default printHeroName
