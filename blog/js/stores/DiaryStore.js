var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    Assign = require('object-assign');

var DiaryStore = Assign({}, EventEmitter.prototype, {
    
    diaries: [],
    diary: null,
    diariesInfo: null,
    isArticleExitst: null,
    getDiaries: function() {
    	return this.diaries;
    },
    getDiariesInfo: function() {
        return this.diariesInfo;
    },
    getIsArticleExitst: function() {
        return this.isArticleExitst;
    },
    getDiary: function() {
        return this.diary;
    },
    queryDiaries: function() {
    	var self = this;
        firebase.database().ref('diaries').orderByChild('date').startAt().once('value')
        .then(function(result) {
        	var res = result.val();
            self.diaries = res;
            self.emit('finishQueryDiaries');
        });
    },
    queryDiariesInfo: function() {
    	var self = this;
        firebase.database().ref('diariesInfo').once('value')
        .then(function(result) {
        	var res = result.val();
            console.log("get diaries information done");
            console.log(res);
            self.diariesInfo = res;
            self.emit('finishGetDiariesInfo');
        });
    },
    checkArticleExist: function() {
    	var self = this;
        firebase.database().ref('diaries/'+this.diariesInfo.amount).once('value')
        .then(function(result) {
        	var res = result.val();
        	if(res) {
                self.isArticleExitst = true;
        	} else {
                self.isArticleExitst = false;
        	}
            self.emit('finishCheckArticle');
        });
    },
    addDiary: function(params) {
        firebase.database().ref('diaries/'+params.id).set(params);
        firebase.database().ref('diariesInfo').child('amount').set(
            this.diariesInfo.amount + 1
        );
        this.diariesInfo.amount += 1;
    },
    queryDiary: function(id) {
        var self = this;
        firebase.database().ref('diaries/' + id).once('value')
        .then(function(result) {
            self.diary = result.val();
            console.log(self.diary);
            self.emit("finishQueryDiary");
        });
    },
    handleAction: function(action) {
        switch(action.type) {
        	case 'QUERY_DIARIES_INFO': {
        		this.queryDiariesInfo();
        		break;
        	}
        	case 'CHECK_ARTICLE_EXIST': {
        		this.checkArticleExist();
        		break;
        	}
        	case 'ADD_DIARY': {
        		this.addDiary(action.data);
        		break;
        	}
        	case 'QUERY_DIARIES': {
        		this.queryDiaries();
        		break;
        	}
            case 'QUERY_DIARY': {
                this.queryDiary(action.id);
                break;
            }
        }
    }

});

AppDispatcher.register(DiaryStore.handleAction.bind(DiaryStore));

module.exports = DiaryStore;