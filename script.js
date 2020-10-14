


class MonsterFun{
    constructor(dataSource, targetNode){
        this.targetNode = targetNode;
        fetch(dataSource)
        .then(response => response.json())
        .then(data => {
            this.monsterList = data.cryptids;
            this.generateList();
        })
        .catch(err =>console.log(err));
    }
    generateList(){
        console.log(this.monsterList);
        console.log(this.targetNode);
        this.monsterList.forEach(monster =>{
            console.log(monster);
            let monsterEntry = document.createElement("tr");
            monsterEntry.innerHTML = `
            <td>${monster.name}</td>
            <td>${monster.otherNames.join(",")}</td>
            <td>${monster.description}</td>
            <td>${monster.location}</td>
            <td>${monster.terrain}</td>
            `
            this.targetNode.appendChild(monsterEntry);
        });
    }

}
let monsters = new MonsterFun("data.json", document.querySelector("#cryptidsList"));
