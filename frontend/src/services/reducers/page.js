// services/reducers/pages.js

import * as page from '../actions/page';

const initialState = {
  menu: [],
  meta: { meta: { type: '' } },
  pages: [],
  details: {},
  children: [],
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case page.GET_PAGES_SUCCESS:
      return {
        ...state,
        pages: action.payload.items
      };
    case page.GET_MAIN_MENU_SUCCESS:
      return {
        ...state,
        menu: action.payload.items
      };
    case page.GET_PAGE_ID_SUCCESS:
      return {
        ...state,
        details: action.payload
      };
    case page.GET_PAGE_ID_FAILURE:
      return {
        ...state,
        errors: action.payload
      };
    case page.GET_MAIN_MENU_FAILURE:
      return {
        ...state,
        errors: action.payload
      };
    case page.GET_PAGE_META_SUCCESS:
      return {
        ...state,
        meta: action.payload.items[0]
      };
    case page.GET_PAGE_TYPE_SUCCESS:
      return {
        ...state,
        details: action.payload
      };
    case page.GET_PAGE_CHILDREN_SUCCESS:
      return {
        ...state,
        children: action.payload.items
      };
    case page.GET_PAGE_META_FAILURE:
      return {
        ...state,
        errors: action.payload
      };
    case page.GET_PAGE_TYPE_FAILURE:
      return {
        ...state,
        errors: action.payload
      };
    case page.GET_PAGE_CHILDREN_FAILURE:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export function refreshPageState(state) {
  if (state.details) {
    return state.details;
  }
  return null;
}

export function refreshPageMeta(state) {
  if (state.meta) {
    return state.meta;
  }
  return null;
}

export function refreshPageMetaFromMenu(state, slug) {
  if (state.menu) {
    const meta = state.menu.filter(item => item.meta.slug === slug);
    return meta;
  }
  return null;
}

export function refreshPageChildren(state) {
  if (state.children) {
    return state.children;
  }
  return null;
}

export function refreshMenu(state) {
  if (state.menu) {
    return state.menu;
  }
  return null;
}
