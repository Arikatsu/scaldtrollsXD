module.exports = {
    callback: (message) => {
        message.channel.send('```[ALL COMMANDS] \n \n {addDb} - syntax:  ?<key> <value>     // <key> should be a single word or multpile words joint with special characters like underscores \n {cp} - syntax: ?cp <key>              //prints the value related to the key in the db \n {echo} - syntax: ?echo <value>        //repeats your message \n {hi} - syntax: ?hi                    //wtf was wrong with me when i made that \n {ping} - syntax: ?ping                //pong \n \n *gonna add more shit later```')
    }
}