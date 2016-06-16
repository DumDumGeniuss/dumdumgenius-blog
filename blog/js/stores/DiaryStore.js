var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    Assign = require('object-assign');

var DiaryStore = Assign({}, EventEmitter.prototype, {
    
    diaries: [],
    diary: null,
    diariesInfo: null,
    toArray: function(map) {
        var array = [];
        for(var key in map) {
            var item = map[key];
            item.id = key;
            array.push(item);
        }
        return array;
    },
    getDiaries: function() {
    	return this.diaries;
    },
    getDiariesInfo: function() {
        return this.diariesInfo;
    },
    getDiary: function() {
        return this.diary;
    },
    getPushKey: function(category) {
        return firebase.database().ref('diaries').child(category).push({hi:'hi'});
    },
    // queryDiaries: function() {
    // 	var self = this;
    //     firebase.database().ref('diaries').child('datas').once('value')
    //     .then(function(result) {
    //     	var res = result.val();
    //         self.diaries = res;
    //         self.emit('finishQueryDiaries');
    //     });
    // },
    queryDiariesByCategory: function(category) {
        var self = this;
        firebase.database().ref('diaries').child(category+'/datas').orderByChild('date').once('value')
        .then(function(result) {
            self.diaries = self.toArray(result.val());
            self.emit('finishQueryDiariesByCategory');
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
    addDiary: function(params, category) {
        firebase.database().ref('diaries/' + category + "/datas").push(params);
    },
    queryDiary: function(id, category) {
        var self = this;
        firebase.database().ref('diaries/' + category + '/datas/' + id).once('value')
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
        	case 'ADD_DIARY': {
        		this.addDiary(action.data, action.category);
        		break;
        	}
        	// case 'QUERY_DIARIES': {
        	// 	this.queryDiaries();
        	// 	break;
        	// }
            case 'QUERY_DIARIES_BY_CATEGORY': {
                this.queryDiariesByCategory(action.category);
                break;
            }
            case 'QUERY_DIARY': {
                this.queryDiary(action.id, action.category);
                break;
            }
        }
    }

});

AppDispatcher.register(DiaryStore.handleAction.bind(DiaryStore));

module.exports = DiaryStore;