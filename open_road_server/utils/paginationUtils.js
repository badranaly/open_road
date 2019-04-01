module.exports = {
	bookLimit: (arrToMap, limit, pageNumber) => {
		let limitedResults = [];
		let condition = pageNumber * limit;
		pageNumber -= 1;

		for (let i = pageNumber * limit; i < condition; i++) {
			if (arrToMap[i]) {
				limitedResults.push(arrToMap[i]);
			} else {
				return limitedResults;
			}
		}
		return limitedResults;
	}
};

// export const offsetBooks = (offset) => {

// }
