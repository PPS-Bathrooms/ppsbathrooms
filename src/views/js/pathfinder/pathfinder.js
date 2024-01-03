const distanceToTimeConversion = 1.0;

class Connection {
    nodeA;
    nodeB;
    walkTime;

    // if no custom walk time it added, it used the distance between nodes
    constructor(nodeA, nodeB, walkTime) {
        this.nodeA = nodeA;
        this.nodeB = nodeB;

        if (walkTime) {
            this.walkTime = walkTime;
        }else {
            this.walkTime = getDirectDistance(nodeA, nodeB) * distanceToTimeConversion;
        }

        nodeA.addConnection(this);
        nodeB.addConnection(this);

        allConnections.push(this);
    }

}

class PathNode {
    xPos;
    yPos;
    connections;

    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.connections = [];

        this.gCost = 0;
        this.hCost = 0;
        this.fCost = 0;

        allNodes.push(this);
    }

    addConnection(connection) {
        this.connections.push(connection);
    }

    fCost() {
        return this.gCost + this.hCost;
    }
}

// technically not needed, but nice to store these somewhere in case they need to be accessed for something else
var allNodes = [];
var allConnections = [];

function testPathfinder() {
    var node1 = new PathNode(1, 0);
    var node2 = new PathNode(2, 5);
    var node3 = new PathNode(2, -10);
    var node4 = new PathNode(3, -6);

    new Connection(node1, node2);
    new Connection(node1, node3);
    new Connection(node4, node3);
    new Connection(node2, node4);

    var path = findPath(node1, node4);

    console.log("printing path");
    for (var i = 0; i < path.length; i++) {
        console.log(path[i].xPos + " " + path[i].yPos);
    }
}

// based off thing i made a long time ago in cs https://github.com/LucaHaverty/hexgrid-game/blob/main/Assets/Scrips/Static/Pathfinding.cs
function findPath(startNode, endNode) {
    // final path 
    path = [];

    openSet = [];
    closedSet = [];

    openSet.push(startNode);

    var searchNum = 0;

    // repeat until there are no valid moves
    while (openSet.length > 0) {
        searchNum++;
        if (searchNum > 100)
            return;

        // select best node from open set to look at next
        currentNode = openSet[0];
        bestIndex = 0;

        for (var i = 1; i < openSet.length; i++) {
            if (openSet[i].hCost+openSet[i].gCost < currentNode.hCost+currentNode.gCost || openSet[i].hCost+openSet[i].gCost == currentNode.hCost+currentNode.gCost && openSet[i].hCost < currentNode.hCost) {
                currentNode = openSet[i];
                bestIndex = i;
            }
        }

        // move current tile to 
        openSet.splice(bestIndex, 1);
        closedSet.push(currentNode);

        // final node reached (yay!)
        if (currentNode == endNode) {
            return retracePath(startNode, endNode);
        }

        // look at all connected nodes
        for (var i = 0; i < currentNode.connections.length; i++) {
            var connection = currentNode.connections[i];

            // select the other node from the connection
            var connectedNode = connection.nodeA == currentNode ? connection.nodeB : connection.nodeA;
            var connectionWalkTime = connection.walkTime;

            /* 
                TODO: also continue if stairs and person needs elevator/ramp 
            */

            if (closedSet.includes(connectedNode)) {
                continue;
            }

            var totalWalkTime = currentNode.gCost + connectionWalkTime;
            
            if (!openSet.includes(connectedNode) || totalWalkTime < connectedNode.gCost) {
                connectedNode.gCost = totalWalkTime;
                connectedNode.hCost = getDirectDistance(currentNode, connectedNode);
                connectedNode.parentNode = currentNode;

                if (!openSet.includes(connectedNode))
                    openSet.push(connectedNode);
            }
        }
    }

    console.log("NO PATH FOUND BETWEEN " + startNode + " AND " + endNode);
}

// retrace the path backwards using parent nodes
function retracePath(startNode, endNode) {
    var path = [];
    var currentNode = endNode;

    while (currentNode != startNode) {
        path.push(currentNode);
        currentNode = currentNode.parentNode;
    }

    path.push(startNode);

    return path.reverse();
}

// distance from one node to the other ignoring walls
function getDirectDistance(nodeA, nodeB) {
    return  Math.sqrt(Math.pow(nodeB.xPos - nodeA.xPos, 2) + Math.pow(nodeB.yPos - nodeA.yPos, 2));
}
