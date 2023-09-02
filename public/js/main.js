// --Template Renderer--

let mTemplateRenderer = (data = {}, mDOM) => {
    let mMain = document.createElement("main");
    mDOM.appendChild(mMain);
    //set..
    mMain.innerHTML = `
    <!-- First Template -->
    <section>
        <nav>
            <h1>5 basic Grammar</h1>
        </nav>
        ${data.data.item1}
    </section>

    <!-- Second Template -->
    <section>
        <nav>
            <h1>10 Idiom About Food</h1>
        </nav>
        <!-- <iframe src="/public/templates/template_2/10 IDIOMS ABOUT FOOD.pdf" width="100%" height="600"></iframe> -->
        <img src="/public/templates/template_2/10_idioms_about_food.svg" alt="second template">
    </section>

    <!-- Third Template -->
    <section>
        <nav>
            <h1>10 Idiom About Life</h1>
        </nav>
        <img src="/public/templates/template_3/10_idioms_about_life.svg" alt="third template">
    </section>

    <!-- Fourth Template -->
    <section>
        <nav>
            <h1>Oxford Comma.</h1>
        </nav>
        <img src="/public/templates/template_4/oxford_comma.svg" alt="fourth template">
    </section>

    <!-- Fifth Template -->
    <section>
        <nav>
            <h1>Parallel Structure</h1>
        </nav>
        <img src="/public/templates/template_5/parallel_structure.svg" alt="fifth template">
    </section>

    <!-- Sixth Template -->
    <section>
        <nav>
            <h1>10 Idiom About Food</h1>
        </nav>
        <img src="/public/templates/template_6/Passive.svg" alt="sixth template">
    </section>
`;

    console.log("Everything okay: ", data.data.item1.text1);
};

mTemplateRenderer({
    "meta": {},
    "data": {
        "item1": `
            <div style="background: #797272; padding: 40px;">
                <img style="width: 100%; margin-bottom: 30px;" src="/public/templates/template_1/single_img/header.svg" alt="header img">

                <div style="background: linear-gradient(180deg, #F2E9F1 0%, rgba(242, 158, 234, 0.00) 100%); padding: 30px;">

                    <div style="margin-block: 50vh; display: flex; flex-direction: column; justify-content: center; align-items: end; position: relative; padding: 10px;">
                        <div>
                            <img src="/public/templates/template_1/single_img/notebook.svg" alt="notebook">
                        </div>
                        <span style="position: absolute; bottom: -10%; right: 10%;">
                            <img src="/public/templates/template_1/single_img/warning.svg" alt="warning">
                        </span>
                    </div>

                    <div style="margin-block: 50vh; display: flex; justify-content: center; align-items: center; position: relative; padding: 10px;">
                        <span>
                            <img style="height: 402px; width: 741px;" src="/public/templates/template_1/single_img/research_bg.svg" alt="research_bg">
                        </span>
                        <span style="position: absolute; bottom: 0%; right: 0%;">
                            <img src="/public/templates/template_1/single_img/research.svg" alt="research">
                        </span>
                    </div>

                    <div style="margin-block: 50vh; display: flex; justify-content: center; align-items: center; position: relative;">
                        <span>
                            <img src="/public/templates/template_1/single_img/confused_bg.svg" alt="confused_bg">
                        </span>
                        <span style="position: absolute; right: 0%;">
                            <img src="/public/templates/template_1/single_img/confused.svg" alt="confused">
                        </span>
                    </div>

                    <div style="margin-block: 50vh; display: flex; justify-content: center; align-items: center;">
                        <span>
                            <img src="/public/templates/template_1/single_img/self-confidence.svg" alt="self-confidence">
                        </span>
                        <span>
                            <img src="/public/templates/template_1/single_img/vague.svg" alt="vague">
                        </span>
                    </div>

                </div>
            </div>
        `
    }
}, document.body);

