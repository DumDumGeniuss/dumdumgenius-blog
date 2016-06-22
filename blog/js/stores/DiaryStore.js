import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import Assign from 'object-assign';

class DiaryStore extends EventEmitter {

    constructor() {
        super();
        this.diaries = [];
        this.diary = null;
        this.diariesInfo = null;
    }
    toArray(map) {
        let array = [];
        for(let key in map) {
            let item = map[key];
            item.id = key;
            array.push(item);
        };
        return array;
    }
    getDiaries() {
    	return this.diaries;
    }
    getDiariesInfo() {
        return this.diariesInfo;
    }
    getDiary() {
        return this.diary;
    }
    queryDiariesByCategory(category) {
        const self = this;
        firebase.database().ref('diaries').child(category+'/datas').orderByChild('date').once('value')
        .then(function(result) {
            self.diaries = self.toArray(result.val());
            self.emit('finishQueryDiariesByCategory');
        });
    }
    queryDiariesInfo() {
    	const self = this;
        firebase.database().ref('diariesInfo').once('value')
        .then(function(result) {
        	var res = result.val();
            self.diariesInfo = res;
            self.emit('finishGetDiariesInfo');
        });
    }
    addDiary(params, category) {
        firebase.database().ref('diaries/' + category + "/datas").push(params);
    }
    queryDiary(id, category) {
        const self = this;
        firebase.database().ref('diaries/' + category + '/datas/' + id).once('value')
        .then(function(result) {
            self.diary = result.val();
            self.emit("finishQueryDiary");
        });
    }
    handleAction(action) {
        switch(action.type) {
        	case 'QUERY_DIARIES_INFO': {
        		this.queryDiariesInfo();
        		break;
        	}
        	case 'ADD_DIARY': {
        		this.addDiary(action.data, action.category);
        		break;
        	}
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

};

const diaryStore = new DiaryStore;

AppDispatcher.register(diaryStore.handleAction.bind(diaryStore));

export default diaryStore;