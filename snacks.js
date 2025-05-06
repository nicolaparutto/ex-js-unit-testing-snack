// 🏆 Snack 1:
const getInitials = (completeName) => {
	const nameSplitted = completeName.split(" ")
	const initials = nameSplitted.map(word => `${word.charAt(0)}`)
	const initialsJoined = initials.join(",")
	return initialsJoined
}


// 🏆 Snack 2:
// 🏆 Snack 3:
// 🏆 Snack 4:

module.exports = {
	getInitials
}