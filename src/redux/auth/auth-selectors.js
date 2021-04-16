// import { createSelector } from '@reduxjs/toolkit';

// если юзер не залогинен то токен null т е  false, а если залогинен то токен строка т е  true
export const getIsAuthenticated = state => Boolean(state.auth.token);

export const getUsername = state => state.auth.user.name;
