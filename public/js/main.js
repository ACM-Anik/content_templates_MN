// --Template Renderer--

let mTemplateRenderer = (data = {}, mDOM) => {
    let mMain = document.createElement("main");
    mDOM.appendChild(mMain);
    //set..
    mMain.innerHTML = `
    <div>
        <h1 style="">Hello World</h1>
        <p>Here is all the content we have to insert</p>
        <p>For example, <span style="color: red;">${data.data.item1.text1.val}</span> is from first parameter.</p>
    </div>
`;


    //do your code..
    console.log("Everything okay: ", data.data.item1.text1);
};

mTemplateRenderer({
    "meta": {},
    "data": {
        //add params based on content requirement
        "item1": {
            "text1": {
                "val": "ans"
            }
        }
    }
}, document.body);

