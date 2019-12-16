function logger(string) {
    let reserveString = string.split("")
        .reverse()
        .join("")
    console.log(reserveString)
}

module.exports = logger;