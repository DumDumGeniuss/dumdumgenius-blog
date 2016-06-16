var AppDispatcher = require('../dispatcher/AppDispatcher');

var DiaryActions = {
    queryDiariesInfo: function() {
        AppDispatcher.dispatch({
        	type: "QUERY_DIARIES_INFO"
        });
    },
    addDiary: function(params, category) {
        AppDispatcher.dispatch({
            type: "ADD_DIARY",
            data: params,
            category: category
        });
    },
    // queryDiaries: function() {
    //     AppDispatcher.dispatch({
    //         type: "QUERY_DIARIES"
    //     });
    // },
    queryDiariesByCategory: function(category) {
        AppDispatcher.dispatch({
            type: "QUERY_DIARIES_BY_CATEGORY",
            category: category
        });
    },
    queryDiary: function(id, category) {
        AppDispatcher.dispatch({
            type: "QUERY_DIARY",
            id: id,
            category: category
        });
    }

}

module.exports = DiaryActions;