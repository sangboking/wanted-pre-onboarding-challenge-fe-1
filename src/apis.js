import axios from "axios";

// todo Id 가져오기
export const getTodoId = (id, loginToken) => {
  return axios.get(`http://localhost:8080/todos/${id}`,
  {
    headers : {
      Authorization : loginToken
    }
  })
};

// todo 생성하기
export const createTodo = (todoTitle, todoContent, loginToken) => {
  return axios.post('http://localhost:8080/todos',
  {
    title : todoTitle,
    content : todoContent
  },
  {
    headers : {
      Authorization : loginToken
    }
  })
};

// todo 삭제하기
export const deleteTodo = (id, loginToken) => {
  return axios.delete(`http://localhost:8080/todos/${id}`,
    {
      headers : {
        Authorization : loginToken
      }
    })
};

// todo 수정하기
export const updateTodo = (id, fixTodoTitle, fixTodoContent, loginToken) => {
  return axios.put(`http://localhost:8080/todos/${id}`,
  {
    title : fixTodoTitle,
    content : fixTodoContent
  },
  {
    headers : {
      Authorization : loginToken
    }
  })
};

// todoList 조회하기
export const getTodoList = (loginToken) => {
  return axios.get('http://localhost:8080/todos',
  {
    headers : {
      Authorization : loginToken
    }
  })
};