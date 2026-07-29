document.addEventListener("DOMContentLoaded", e => {
    const body =  document.querySelector("main");//"body|main"でも可.
    const rootDomDealer = new Deal(body);
    /*
    rootDomDealer.CE("div", { id: "box", class: "main" });
    rootDomDealer.CCE("#box", "p", { text: "Paragraph", id: "para1" });
    rootDomDealer.CCE("#box", "p", { text: "Paragraph 2", id: "para2" });
    rootDomDealer.CCE("#box|#para1", "div", { text: "para1div", id: "para1div"})
    const data = rootDomDealer.GET("#para1");
    const data2 = rootDomDealer.GET("#para1|div");
    rootDomDealer.CCE("#box","p", { text: JSON.stringify(data), id: "dated"})
    rootDomDealer.CCE("#box","p", { text: JSON.stringify(data2), id: "dated2"})
    */
    //ここは例だからコメントアウト.
    
    //rootDomDealer.MODIFY()書いてないけどとにかく横並び.
    
    //上記のようにしたかったけど構造上できない。これだからすべての要素を一から作ったほうがいいんですね.
    rootDomDealer.CE("div", { id: "header", styles: { height: "15vh", margin: "0", padding: "0", "background-color": "darkgrey"}})
    rootDomDealer.CE("div", { id: "block", styles: { display: "flex", height: "850vh", margin: "0", padding: "0", "background-color": "black"}})
    rootDomDealer.CCE("#block", "div", { id: "leftblock", styles: { width: "50%", height: "100vh", "background-color": "black"}});
    rootDomDealer.CCE("#block", "div", { id: "rightblock", styles: { width: "50%","margin-top": "40px", "margin-bottom": "80px", "margin-right": "20px", "margin-left": "20px" , border : "solid 5px grey", "border-radius": "15px", "background-color": "black"}});
    function createQuizUI(data) {

    }
    function getquizdata() {
        fetch("/qs/qsData/1.json", {
            cache: "no-store"
        }).then(
            res => res.json()
        ).then(
            data => {
                console.log(data);
                alert("yes" + JSON.stringify(data));
                return data;
            }
        ).catch(error => {
            alert("no" + error)
        })
    };
    const DATA = getquizdata();
})