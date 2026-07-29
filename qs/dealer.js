function initializeQuiz() {
    const body = document.querySelector("main");
    const rootDomDealer = new Deal(body);
    
    rootDomDealer.CE("div", { id: "header", styles: { height: "15vh", margin: "0", padding: "0", "background-color": "#333333"}})
    rootDomDealer.CE("div", { id: "block", styles: { display: "flex", height: "85vh", "box-sizing": "border-box", margin: "0", padding: "0", "background-color": "black"}})
    rootDomDealer.CCE("#block", "div", { id: "leftblock", styles: { width: "50%", height: "100%", "background-color": "black"}});
    rootDomDealer.CCE("#block", "div", { id: "rightblock", styles: { width: "50%", height: "100%", "box-sizing": "border-box", "background-color": "black", padding: "40px 20px 80px 20px"}});
    rootDomDealer.CCE("#block|#rightblock", "div", { id: "rightcontent", styles: { height: "100%", "box-sizing": "border-box", border : "solid 5px #333333", "border-radius": "15px", "background-color": "#000000"}})
    
    function createQuizUI(data) {
        rootDomDealer.CCE("#header", { text: data.name})
    }
    
    function getquizdata() {
        fetch("/qs/qsData/1.json", {
            cache: "no-store"
        }).then(
            res => res.json()
        ).then(
            data => {
                console.log(data);
                return data;
            }
        ).catch(error => {
        })
    };
    
    const DATA = getquizdata();
}

// ページが既に読み込まれている場合は即座に実a
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeQuiz);
} else {
    initializeQuiz();
}