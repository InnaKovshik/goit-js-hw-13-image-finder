const apiKey = "19831402-766c30a230adf7d2aaf6df8e0";

export default{
    page: 1,
    searchQuery: '',
    
    fetchImg() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            }
        }

        return fetch(url, options)
        .then(res => res.json())
        .then(({hits}) => {
            this.page +=1;
            return hits;
         })
        .catch (error => console.log(error));
    },

    resetPage(){
        this.page = 1;
    },

    get query(){
        return this.searchQuery;
    },

    set query(value){
        this.searchQuery = value;
    }
};