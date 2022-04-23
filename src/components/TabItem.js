import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TabItemStyled = styled.div`
  display: flex;
  flex: 1;
  background: white;
  color: black;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 10px;
  width: 180px;
  column-gap: 10px;
  border-radius: 2px;
  font-weight: bold;
  font-size: 12px;
  align-items: center;
  max-height: 30px;

  .main_text {
    width: 80%;
  }

  .edit-icon {
    cursor: pointer;
  }

  .cross-icon {
    color: red;
    cursor: pointer;
  }

  .add-icon {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  `;

const TabItem = ({ item, parentIndex, editItem, deleteItem, contentIndex }) => {
  const [text, setText] = useState(item);
  const [isEditClicked, clickEdit] = useState(false);

  const editValue = (val) => {
    setText(val);
  };

  const update = () => {
    editItem(parentIndex, contentIndex, text);
    clickEdit(false);
  };

  const deleteValue = () => {
    deleteItem(parentIndex, contentIndex);
  };

  return (
    <TabItemStyled>
      {!isEditClicked ? (
        <div className="main_text">{item}</div>
      ) : (
        <input
          type="text"
          className="main_text"
          value={text}
          onChange={(e) => {
            e.preventDefault();
            editValue(e.target.value);
          }}
        />
      )}
      {!isEditClicked ? (
        <i
          className="fas fa-pencil-alt edit-icon"
          onClick={() => clickEdit(true)}
        ></i>
      ) : (
        <div className="add-icon" onClick={() => update()}>
          +
        </div>
      )}
      <div className="cross-icon" onClick={() => deleteValue()}>
        X
      </div>
    </TabItemStyled>
  );
};

export default TabItem;
