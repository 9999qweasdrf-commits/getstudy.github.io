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
    rootDomDealer.CE("div", { id: "header", styles: { height: "15vh", margin: "0", padding: "0", "background-color": "#333333"}})
    rootDomDealer.CE("div", { id: "block", styles: { display: "flex", height: "85vh", "box-sizing": "border-box", margin: "0", padding: "0", "background-color": "black"}})
    rootDomDealer.CCE("#block", "div", { id: "leftblock", styles: { width: "50%", height: "100%", "background-color": "black"}});
    rootDomDealer.CCE("#block", "div", { id: "rightblock", styles: { width: "50%", height: "100%", "box-sizing": "border-box", "background-color": "black", padding: "40px 20px 80px 20px"}});
    rootDomDealer.CCE("#block|#rightblock", "div", { id: "rightcontent", styles: { height: "100%", "box-sizing": "border-box", border : "solid 5px #333333", "border-radius": "15px", "background-color": "white"}})
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
                return data;
            }
        ).catch(error => {
        })
    };
    const DATA = getquizdata();
})
