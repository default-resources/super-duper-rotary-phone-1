export default {
//installed library check on page load
	myFun1: () => {
		amplitude.Identify()
	},
	myFun2: async () => {
		this.myFun1()
		typeof jsonwebtoken === "object" 
			&& typeof jsonwebtoken.decode === "function" 
			&& showAlert("Success");
	}
}