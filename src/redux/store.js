// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id:1,theme:'Theme 1',message:"Its my first message",countLikes:10},
//                 {id:2,theme:'Theme 2',message:"Its my second message",countLikes:100},
//                 {id:3,theme:'Theme 3',message:"Its my third message",countLikes:1000},
//                 {id:4,theme:'Theme 4',message:"Its my fourth message",countLikes:10000},
//                 {id:5,theme:'Theme 5',message:"Its my fifth message",countLikes:100000},
//             ],
//             newTextPost: "",
//             newTextTheme: "",
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Vladimir', surname: 'Ferents', photo: '', location: {country: 'Ukraine', city: 'Uzgorod'}},
//                 {id: 2, name: 'Ivan', surname: 'Kirilenko', photo: '', location: {country: 'USA', city: 'Vashington'}},
//                 {id: 3, name: 'Serg', surname: 'Fedinets', photo: '', location: {country: 'Spain', city: 'Madrid'}},
//                 {id: 4, name: 'Olga', surname: 'Ambarova', photo: '', location: {country: 'Balarus', city: 'Minsk'}},
//                 {id: 5, name: 'Stepan', surname: 'Dolgosh', photo: '', location: {country: 'Germany', city: 'Munich'}},
//             ],
//             messageData: [
//                 {id: 1, messageBody: 'Hi, I am Vladimir'},
//                 {id: 2, messageBody: 'Hi, I am Ivan'},
//                 {id: 3, messageBody: 'Hi, I am Serg'},
//                 {id: 4, messageBody: 'Hi, I am Olga'},
//                 {id: 5, messageBody: 'Hi, I am Stepan'},
//             ],
//             newTextMessage: "",
//         },
//         usersPage: {
//             usersData: [
//                 {id:1,followed:true,fullName:"Vladimir",
//                     status:'I\'m junior PHP developer', location:{country:'Ukraine',city:'Uzgorod'},},
//                 {id:2,followed:false,fullName:"Oksana",
//                     status:'I\'m middle JavaScript developer', location:{country:'Russia',city:'Moscow'},},
//                 {id:3,followed:true,fullName:"Serg",
//                     status:'I\'m senior Python developer', location:{country:'Spain',city:'Madrid'},},
//                 {id:4,followed:false,fullName:"Victoriya",
//                     status:'I\'m junior C++ developer', location:{country:'Belarus',city:'Minsk'},},
//                 {id:5,followed:false,fullName:"Daniel",
//                     status:'I\'m full-stack developer', location:{country:'USA',city:'New-York'},},
//             ],
//         },
//     },
//
//     _callSubscriber(){
//         console.log('State changed');
//     },
//
//     getState(){
//         return this._state;
//     },
//
//     subscribe(observer){
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action){
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//
//         this._callSubscriber(this._state);
//     },
// }
//
// export default store;
// window.store = store;