// --Template Renderer--

let mTemplateRenderer = (data = {}, mDOM) => {
    let mMain = document.createElement("main");
    mDOM.appendChild(mMain);
    //set..
    mMain.innerHTML = `
    <div>
        <img style="" src="/public/templates/templates_1.svg" alt="template">
    </div>
`;
    // <div>
    //     <h1>Hello World</h1>
    //     <p>Here is all the content we have to insert</p>
    //     <p>For example, <span style="color: red;">${data.data.item1.text1.val}</span> is from first parameter.</p>
    //     <img style="" src="/public/templates/templates_1.svg" alt="template">
    // </div>

    console.log("Everything okay: ", data.data.item1.text1);
};

mTemplateRenderer({
    "meta": {},
    "data": {
        //add params based on content requirement
        "item1": {
            "text1": {
                "value": "Okay"
            }
        }
    }
}, document.body);

