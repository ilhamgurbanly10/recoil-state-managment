import { atom, selector } from 'recoil';


// atom state kimidir
// key - ad verir
// default - defolt deyeridir, array, string, obyekt ve sair ola biler

export const textState = atom({
  key: 'textState',
  default: '',
});

// selector reduxda createSlice kimidir, burada createSlice ile yaratdigimiz kimi stat yaradiriq

// key - selectorun adini teyin edir, onu sonra istifade ede bilmek ucun.

// get - qaytaracagi deyerin yazildigi funskiyadir. Bunu icerisindeki get ise 
// argument kimi oturulen callback funksiyadir ve diger atom ve selectorlara access
// ala bilmek ucundur

// Burada get(textState) ile atomdan textState nin defolt deyerini aliriq

export const characterCountState = selector({
  key: 'characterCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});


// todolist

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const todoList = selector({
  key: 'todoList',
  get: ({ get }) => {
    const list = get(todoListState);
    return list;
  },
});


// posts

export const postsState = atom({
  key: 'postsState',
  default: [],
});

export const postsLoading = atom({
  key: 'postsLoading',
  default: false,
});

export const postsList = selector({
  key: 'postsList',
  get: ({ get }) => {
    const list = get(postsState);
    return list;
  },
});