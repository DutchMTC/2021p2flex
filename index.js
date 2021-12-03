function init()
{
    new Game();
}

let game;


class Tile
{
    constructor(div)
    {
        this.div = div;
        this.goto = -1;
    }
}

class Player
{
    constructor(index)
    {
        this.atTile = 0;
        this.index = index;
        this.pawn = document.getElementsByClassName("pawn"+index)[0];
        this.pawn.style.display = "block";
    }
}

class Game
{
    constructor()
    {
        this.selectplayersDiv = document.getElementsByClassName("selectplayers")[0];
        this.winnerDiv = document.getElementsByClassName("winner")[0];
        this.playerTurnDiv = document.getElementsByClassName("playerturn")[0];
        this.rollDiv = document.getElementsByClassName("roll")[0];
        this.mainDiv = document.getElementsByClassName("main")[0];
        this.boardDiv = document.getElementsByClassName("board")[0];
        this.boardoverlayDiv = document.getElementsByClassName("boardoverlay")[0];
        
        this.tiles = [];
        this.players = [];
        this.playerTurn = 0;
        this.setupBoard();
    }
    setupBoard()
    {
        let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 
            3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 
            1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 
            0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]

        let x = 0;
        let y = 10;
        let tileSize = 55;

        for (var i = 0; i < path.length; i++)
        {
            let cmd = path[i];
            if (cmd == 1)
            {
                //right
                x++;
            }
            else if (cmd == 3)
            {
                //left
                x--;
            }
            else if (cmd == 0)
            {
                //left
                y--;
            }

            let div = this.makeBoardDiv(x * tileSize, y * tileSize, i+1);

            let tile = new Tile(div);
            this.tiles.push(tile);
        }
        this.setupGotos();
    }
    setupGotos()
    {
        //Deze tegelnummers beginnen bij 1
        let goto = [[6, 14], [16, 4], [17, 23], [27, 33], [29, 10], [38, 43], [39, 20], [45, 34]];

        for (var i = 0; i < goto.length, i++;)
        {
            let element = goto[1];

            let start = element[0] - 1;
            let end = element[1] - 1;

            let tile = this.tiles(start);
            tile.goto = end;

        }

        let element = goto[0];
        console.log(element);
    }
    start(amountOfPlayers)
    {

    }
    moveToNextPlayer()
    {

    }
    draw()
    {

    }
    roll()
    {

    }
    setPawn(playerI, atTile)
    {

    }
    makeBoardDiv(x, y, tileDisplayNumber)
    {
        let div = document.createElement("div");

        div.className = "tile";
        div.style.left = x + "px";
        div.style.top = y + "px";
        div.textContent = tileDisplayNumber;

        this.boardDiv.appendChild(div);

        return div;
    }
}