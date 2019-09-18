import styled, { css } from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`;

export const Title = styled.h1`
    color: #ebedef;
    font-size: 100px;
    font-weight: 100;
`;

export const Form = styled.form`
    background: #fff;
    width: 600px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

export const TextInput = styled.input`
    ::placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
    }

    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: #727374;
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.03);
`;

export const TodoList = styled.ul`
    list-style: none;
`;

export const TodoListItem = styled.li`
  color: #595a5b;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  &:last-child {
    border-bottom: none;
  }
  div {
    display: flex;
    input {
      text-align: center;
      width: 40px;
      height: auto;
      margin: auto 0;
      border: none; /* Mobile Safari */
      -webkit-appearance: none;
      appearance: none;
    }
    input:after {
      content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="%23ededed" stroke-width="3"/></svg>');
    }
    input:checked:after {
      content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="%23bddad5" stroke-width="3"/><path fill="%235dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
    }
    label {
      word-break: break-all;
      padding: 15px 60px 15px 15px;
      display: block;
      line-height: 1.2;
      transition: color 0.4s;
      ${props =>
        props.item.completed &&
        css`
          color: #d9d9d9;
          text-decoration: line-through;
        `}
    }
  }
`;