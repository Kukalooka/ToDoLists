const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const listSchema = require("../schemas/listSchema");
const {
    createTable,
    insertRecord,
    getRecords,
} = require("../utils/sqlFunctions");


const createList = async (req, res) => {
    const { name, type } = req.body;
    let userId = 0

    if (!name || !type) {
        res
            .status(400)
            .json({ error: "Name or Type fields cannot be empty!" });
        return;
    }

    jwt.verify(req.headers["authorization"], process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
        }
        else{
            userId = decoded.userId
        }
    })

    if (userId === 0){
        res
            .status(400)
            .json({ error: "Invalid Token" });
        return;
    }

    const list = {
        listId: uuidv4(),
        listName: name,
        listType: type,
        userId: userId
    }

    try {
        await createTable(listSchema);
        await insertRecord("lists", list);
        res.status(201).json({ message: "List created successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getLists = async (req, res) => {
    let userId = 0

    jwt.verify(req.headers["authorization"], process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
        }
        else{
            userId = decoded.userId
        }
    })

    if (userId === 0){
        res
            .status(400)
            .json({ error: "Invalid Token" });
        return;
    }

    try {
        await createTable(listSchema);
        let records = await getRecords("lists", "userId", userId);
        res.status(201).json({ records });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    createList,
    getLists,
};