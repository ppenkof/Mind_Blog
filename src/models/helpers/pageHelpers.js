export default {
    setTitle(title){
        this.pageTitle = title;
    },
    getTitle(){
        return this.pageTitle || 'Friendly World';
    }
};  