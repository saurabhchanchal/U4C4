

// module.exports = () => {
//     return mongoose.connect(
//         "mongodb+srv://saurabha110:saurabha110@cluster0.oai75.mongodb.net/project1?retryWrites=true&w=majority"
//     );
// };

const app = require("./index");
// const connect = require("./cofigs/db");
app.listen(5000, async function () {
    try {
        console.log("listening on port 5000");
    }
    catch (err) {
        console.log('err:', err)
    }
})