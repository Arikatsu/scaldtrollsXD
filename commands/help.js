module.exports = {
    callback: (message) => {
        message.channel.send('```[ALL COMMANDS] \n \n {addDb} - syntax:  !scald <key> <value>     // <key> should be a single word or multpile words joint with special characters like underscores \n {cp} - syntax: !scald cp <key>              //prints the value related to the key in the db \n {echo} - syntax: !scald echo <value>        //repeats your message \n {hi} - syntax: !scald hi                    //wtf was wrong with me when i made that \n {ping} - syntax: !scald ping                //pong \n \n *gonna add more shit later*')
    }
}