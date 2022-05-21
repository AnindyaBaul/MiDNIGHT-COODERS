var liteB=document.getElementById("lite");
var proB=document.getElementById("proB");
var premiumB=document.getElementById("premiumB");

liteB.addEventListener("mouseenter",function(){
    liteB.innerText="ORDER NOW";
} )
liteB.addEventListener("mouseout",function(){
    liteB.innerText="FROM $100";
} )
proB.addEventListener("mouseenter",function(){
    proB.innerText="ORDER NOW";
} )
proB.addEventListener("mouseout",function(){
    proB.innerText="FROM $300";
} )
premiumB.addEventListener("mouseenter",function(){
    premiumB.innerText="ORDER NOW";
} )
premiumB.addEventListener("mouseout",function(){
    premiumB.innerText="FROM $500";
} )