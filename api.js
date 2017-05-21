var api = {
	getIssues(repository){
		var url = 'https://api.github.com/repos/' + repository + '/issues';
		return fetch(url).then((res) => res.json());
	}
};

module.exports=api;