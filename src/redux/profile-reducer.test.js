import React from "react";
import profileReducer, {addPostThemeAC, deletePostAC} from "./profile-reducer";

test('length of message should be decrement', () => {
    let action = deletePostAC(1);
    let state = {
        postsData: [
            {id:1,theme:'Theme 1',message:"Its my first message",countLikes:10},
            {id:2,theme:'Theme 2',message:"Its my second message",countLikes:100},
            {id:3,theme:'Theme 3',message:"Its my third message",countLikes:1000},
            {id:4,theme:'Theme 4',message:"Its my fourth message",countLikes:10000},
            {id:5,theme:'Theme 5',message:"Its my fifth message",countLikes:100000},
        ],
    };
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4);
    //expect(newState.postsData[5].message).toBe('54565659878');
});