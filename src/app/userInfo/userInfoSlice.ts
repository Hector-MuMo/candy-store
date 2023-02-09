import { createSlice } from "@reduxjs/toolkit"

interface UserInfo {
    user: {
        info: User
    }
}

export const userInfoSlice = createSlice({
    name: "user",
    initialState: {
        info: {}
    },
    reducers: {
        getUserInfo: (state, action) => { },
        updateUserInfo: (state, action) => {
            state.info = action.payload
        }
    }
})

export const { getUserInfo, updateUserInfo } = userInfoSlice.actions
export const selectUserInfo = (state: UserInfo) => state.user.info

export default userInfoSlice.reducer