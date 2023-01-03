function init() {

    display('document', document);

    const docElem = document.documentElement;
    display('document.documentElement', docElem);

    for (i = 0; i < docElem.childNodes.length; i++) 
        display(`documentElement child[${i}]`, docElem.childNodes[i]);

    const helloPara = document.getElementById('helloPara');
    display('helloPara', helloPara);

    const byePara = document.querySelector('#byePara');
    display('byePara', byePara);
}

function display(msg, node) {
    console.log('\n-----------------------------------------------------');
    console.log(`Node info for: ${msg}`);
    console.log(`nodeType:  ${node.nodeType}`);
    console.log(`nodeName:  ${node.nodeName}`);
    console.log(`innerHTML: ${node.innerHTML}`);
    console.log(`innerText: ${node.innerText}`);
}