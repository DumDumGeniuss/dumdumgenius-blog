var AppDispatcher = require('../dispatcher/AppDispatcher');

var DiaryActions = {
    queryDiariesInfo: function() {
        AppDispatcher.dispatch({
        	type: "QUERY_DIARIES_INFO"
        });
    },
    checkArticleExist: function() {
        AppDispatcher.dispatch({
            type: "CHECK_ARTICLE_EXIST"
        });
    },
    addDiary: function(params) {
        AppDispatcher.dispatch({
            type: "ADD_DIARY",
            data: params
        });
    },
    queryDiaries: function() {
        AppDispatcher.dispatch({
            type: "QUERY_DIARIES"
        });
    },
    queryDiary: function(id) {
        AppDispatcher.dispatch({
            type: "QUERY_DIARY",
            id: id
        });
    }

}

module.exports = DiaryActions;