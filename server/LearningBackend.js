import Word from "../model/word";

function learningApi(app) {
    app.post("/api/allWord", async(req, res) => {
        console.log("receive a all Word post");
        console.log(req.body);
        const {user} = req.body;
        
        const existing = await Word.find({UserID:user});
        console.log(existing);
        if (!existing) {
            res.json({words:[], message:"No Word"});
        }
        else {
            res.json({words:existing.map(t => ({word:t.Word, answer:t.Answer, key:t.Word})), message:"Have Words"});
        }
    });

    app.post("/api/newWord", async(req, res) => {
        console.log("receive a new Word post");
        console.log(req.body);
        const {user, word, answer} = req.body;
        try {
            const existing = await Word.findOne({UserID: user, Word:word});
            console.log(existing);
            if (existing) {
                res.json({message:"This word exists"});
            }
            else {
                const newWord = new Word({UserID: user, Word:word, Answer:answer});
                newWord.save()
                res.json({message:"adding success"});
            }
        } catch (e) {
            res.json({message:"adding fail"});
            throw new Error("adding fail");
        }
    });

    app.post("/api/deleteWord", async(req, res) => {
        console.log("receive a delete Word post");
        console.log(req.body);
        const {user, word} = req.body;
        try {
            const existing = await Word.deleteOne({UserID: user, Word:word});
            res.json({message:"delete success"});
        } catch (e) {
            res.json({message:"delete fail"});
            throw new Error("delete fail");
        }
    });
}

export default learningApi;