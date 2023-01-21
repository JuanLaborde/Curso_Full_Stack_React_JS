var pool = require('./bd');

async function getNews() {
    var query = 'select * from news';
    var rows = await pool.query(query);
    return rows;
}

async function insertNews(obj) {
    try {
        var query = "insert into news set ?";
        var rows = await pool.query(query, [obj])
        return rows;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNewsById(id) {
    var query = 'delete from news where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNewsByID(id) {
    var query = 'select * from news where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function ModifyNewsById(obj, id) {
    try {
        var query = 'update news set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}


module.exports = { getNews, insertNews, deleteNewsById, getNewsByID, ModifyNewsById }