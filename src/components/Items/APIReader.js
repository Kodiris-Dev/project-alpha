import Item from './Item'
const attributeNames = {
    OuchPower: "Physical Power",
    ZapPower: "EnergyPower",
    OuchieArmor: "Physical Armor",
    SizzleArmor: "Energy Armor",
    FlatOuchiePenetration: "Physical Penetration",
    FlatSizzlePenetration: "Energy Penetration",
    MovementSpeed: "Movement Speed",
    Health: "Health",
    HealthRegenRate: "HealthRegenRate",
    Mana: "Mana",
    ManaRegenRate: "ManaRegenRate",
    PCTCDR: "Cooldown Reduction",
    AttackSpeed: "Attack Speed",
    LifeSteal: "LifeSteal",
    CritChance: "CritChance",
    BasicAttackDmg: "Basic Atk Dmg"
    
}

const heroAttributeNames = {

    health: "Health",
    healthRegen: "HealthRegenRate",
    mana: "Mana",
    manaRegen: "ManaRegenRate",
    physicalArmor: "OuchieArmor",
    energyArmor: "SizzleArmor",
    movespeed: "MovementSpeed",

    healthPerLevel: "Health per Level",
    healthRegenPerLevel: "Health Regeneration per Level",
    manaPerLevel: "Mana per Level",
    manaRegenPerLevel: "Mana Regeneration per Level",
    physicalArmorPerLevel: "Physical Armor per Level",
    energyArmorPerLevel: "Energy Armor per Level"
}

function heroAttributeToAttribute(heroAttribute){
    
    return attributeNames[heroAttributeNames[heroAttribute]];
}

function attributesAsDictionary(attributes){
    let attributesDictionary = {};

    for(var i in attributes){
        
        attributesDictionary[attributes[i].attributeName] = attributes[i];

        //console.log(attributes[i].attributeName);
    }
    //console.log("Dictionary Creation complete\n\n")

    return attributesDictionary;
}

class Attribute{
    constructor(name, value, rank, details){

        this.attributeName = (name === undefined)? "Physical Power": name ;
        this.value = (value === undefined)? 0 : value;
        this.rankValue = (rank === undefined)? 0 : rank;
        this.details = (details === undefined)? "" : details;

        this.maxValue = 0;
    }  
    
    createAttribute(name, value, rank, details) {
        this.attributeName = name;
        this.value = value;
        this.rankValue = rank;
        this.details = details;
    }

    determineMaxValue(){
        var isHealthOrMana = this.attributeName === attributeNames.Health ||
        this.attributeName === attributeNames.Mana;

        if (isHealthOrMana){
            return 5000;
        }

        else{
            return 600;
        }
    }
}

function isDistributionAttribute(attributeName){
    return attributeName ===  "CritChance" 
}

function isPercentAttribute(attributeName){
    return attributeName === "Cooldown Reduction"
             || attributeName ===  "CritChance" || attributeName === "LifeSteal";
}

function isCooldownReduction(attributeName){
    return attributeName === "Cooldown Reduction";
}

function isAttackSpeed(attributeName){
    return attributeName === "Attack Speed";
}
function isMovementSpeed(attributeName){
    return attributeName === attributeNames.MovementSpeed;
}

  
  function returnItem(itemName, callback) {
      var xmlHttp = new XMLHttpRequest();
      //xmlHttp.responseType = 'json';
      var url = 'https://api.playfault.com/items/';
  
      var item = new Item();
  
      xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4) {
          if (xmlHttp.status === 200) {
            //console.log(xmlHttp.response);
            var itemResponse = JSON.parse(xmlHttp.responseText);
            // itmes have assigned numbres that in theory won't change, eg SI Boots = item 1
            // console.log(itemResponse[1]) // prints first item - SI Boots
            // within each item, descriptions are always in the same order, first level list is
            // name, parents, children, treeId, attributes, passive, active, cost, color
            // console.log(Object.keys(itemResponse[1]))    // prints keys in first item
            // loop through and save each item, will need nested loops as well
  
            for (var i in itemResponse){
  
              if (itemResponse[i]['name'] === itemName){
                
                item.id = i;
                console.log("Item id: " + item.id);
                  
                console.log("You are looking fore details about " + itemName)
                // name is a single string
                var name = itemResponse[i]['name']
                console.log("CURRENT ITEM IS = "+name)
    
                item.name = name;
                // parents is a list of numbers for what it can be built into, will be empty at top of list 
                var parents = itemResponse[i]['parents']
                
  
                console.log("Has parents: "+parents)
                for (var parent in parents){
                  
                  var nextParentItem = itemResponse[i]['parents'][parent]
                  item.parents.push(nextParentItem);
                }
    
  
                // children is list of numbers for what builds into this, will generally be a single number
                console.log("Has Children: "+children)
                var children = itemResponse[i]['children'];
                
                for (var child in children){
                  
                  var nextChildItem = itemResponse[i]['children'][child]
                  item.children.push(nextChildItem);
                }
  
                // treeId is a unique ID for the skill tree related to the highest level item 
                var treeId = itemResponse[i]['treeId'];
                console.log("Tree ID= "+treeId)
    
                
                // attributes - can have multiple lists within giving item information
                  // attribute fields are AttributeName, Value, RankValule, UIDetails
                var attributes = itemResponse[i]['attributes'];
                
                for(var attribute in attributes){
                  let attr = new Attribute();
  
  
                  attr.attributeName = attributeNames[itemResponse[i]['attributes'][attribute]['AttributeName']];
                  attr.value = itemResponse[i]['attributes'][attribute]['Value'];
                  attr.rankValue = itemResponse[i]['attributes'][attribute]['RankValue'];
                  attr.details = itemResponse[i]['attributes'][attribute]['UIDetails'];
  
                  item.attributes.push(attr);
                }
                
                //console.log[attrNames]
                // passive, active, cost, color are descriptions of that item
                var passive = itemResponse[i]['passive']
                var active = itemResponse[i]['active']
                var cost = itemResponse[i]['cost']
                var color = itemResponse[i]['color']
                console.log("Passive: "+passive, "Acitve: "+active, "Cost: "+cost, "Color: "+color) 
                
                item.passive = passive;
                item.active = active;
                item.cost = cost;
                item.color = color;
  

                
              }
                   
            }
          } else {
            console.log(xmlHttp.response);
          }
        }
      };
      xmlHttp.open('GET', url, true);
      xmlHttp.send(null);
    }

    export default returnItem