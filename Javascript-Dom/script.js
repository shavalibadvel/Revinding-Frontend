function init() {
    const h3Elements=document.getElementsByTagName('h3');
    //console.log(h3Elements);
    const headingClass=document.getElementsByClassName('heading');
    // console.log(headingClass);
    const nameId=document.getElementById('unique');
    nameId.textContent=nameId.textContent+" Badvel";
    // console.log(nameId.textContent);
    const bodyElement=document.getElementsByTagName('body')[0];
    console.log(bodyElement.innerHTML)
    // setTimeout(()=>{
    //     bodyElement.innerHTML=`<p> This is my world of Dom Manipulation </p>`;
    // },2000)
    const pEl=document.createElement('p');
    pEl.textContent="This is my world of Dom Manipulation";
    bodyElement.appendChild(pEl);

}
init();