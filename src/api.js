export default class Api {
    static async add(author,comment,parentId) {
        await fetch('http://localhost:8000/api', {
            method: "POST",
            body: JSON.stringify({
                author: author,
                comment: comment,
                parentID: parentId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(
            res => res.json()
        )
    }
    static async delete(id) {
        await fetch('http://localhost:8000/api/:id', {
            method: "POST",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
    static async update(id,author,comment) {
        await fetch('http://localhost:8000/api/update', {
            method: "PUT",
            body: JSON.stringify({
                id: id,
                author: author,
                comment: comment,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(
            res => res.json()
        ).catch(e => console.log(e))
    }
}