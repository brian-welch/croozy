function setTagAttributes(tagObj, args={}) {
    for(let key in args) {
        tagObj.setAttribute(key, args[key]);
      }
}




export function displayProfile(profileString) {
    const containerDiv = document.createElement('div');
    setTagAttributes(containerDiv,{'class':'container',});
    document.body.appendChild(containerDiv);

}