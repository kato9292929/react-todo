import React from "react";
import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, settodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいいい"
  ]);

  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  const 

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={}/>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>うううううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
