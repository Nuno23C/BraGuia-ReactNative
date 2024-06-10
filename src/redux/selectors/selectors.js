// APP
export const selectAppStatus = state => state.app.status;
export const selectApp = state => state.app.app;

// TRAILS
export const selectTrailsStatus = state => state.trails.status;
export const selectTrails = state => state.trails.trails;

// USER
export const selectUserStatus = state => state.user.status;
export const selectCookies = state => state.user.cookies;
export const selectUserInfo = state => state.user.user_info;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectTrailHistory = state => state.user.trailHistory;
