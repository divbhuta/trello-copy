import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TabItem from './TabItem';

const TabListItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 20px;
  background-color: #cccccc;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 200px;
  height: fit-content;
  border-radius: 8px;

  .title {
     text-align: center;
     font-weight: bold;
     font-size: 18px;
  }
`;

const AddItem = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  padding: 20px;
  background: transparent;
  padding: 10px;
  height: 10px;
  width: 180px;
  align-items: center;

  .submit {
    font-weight: bold;
    cursor: pointer;
  }

  input {
    background-color: transparent;
  }

`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  padding: 20px;
  height: calc(100vh - 50px);
`;

const DeleteTab = styled.div`
    align-self: center;

    button {
      border: 1px solid red;
      cursor: pointer;
    }
`;

const AddNewTab = styled.div`
   .add-new-tab {
     height: 50px;
     width: 50px;
     background: #0099ff;
     border-radius: 50px;
     text-align: center;
     line-height: 50px;
     vertical-align: middle;
     cursor: pointer;
     
   }
 
`;

const TabItemWrapper = ({title, index, content, editItem, deleteItem, addItem, deleteTab}) => {
  const [newContent, setNewContent] = useState('');

  return (
<TabListItem>
              <div className="title">{title}</div>
              {content.length > 0 &&
                content.map((element, contentIndex) => {
                  return (
                    <TabItem
                      item={element}
                      editItem={editItem}
                      parentIndex={index}
                      contentIndex={contentIndex}
                      deleteItem={deleteItem}
                      key={`${element}${contentIndex}`}
                    />
                  );
                })}
              <AddItem key={`add-${index}`}>
                <input
                  type="text"
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Add task"
                  key={}
                />
                <div className="submit" onClick={() => {addItem(index, newContent); setNewContent('');}}>
                  {' '}
                  +{' '}
                </div>
              </AddItem>
              <DeleteTab key={`delete-${index}`}>
                <button
                  onClick={() => {
                    deleteTab(index);
                  }}
                >
                  Delete
                </button>
              </DeleteTab>
            </TabListItem>
  )
}

const Tab = (props) => {

  const editItem = (parentIndex, contentIndex, content) => {
    const data = props.data;
    const dataJSON = data[parentIndex];
    const contentArray = dataJSON['content'];
    contentArray[contentIndex] = content;
    dataJSON['content'] = contentArray;
    data[parentIndex] = dataJSON;
    props.setData([...data]);
  };

  const deleteItem = (parentIndex, contentIndex) => {
    const data = props.data;
    const dataJSON = data[parentIndex];
    const contentArray = dataJSON['content'];
    contentArray.splice(contentIndex, 1);
    dataJSON['content'] = contentArray;
    data[parentIndex] = dataJSON;
    props.setData([...data]);
  };

  const addItem = (parentIndex, content) => {
    if (content) {
      const data = props.data;
      const dataJSON = data[parentIndex];
      const contentArray = dataJSON['content'];
      contentArray.push(content);
      dataJSON['content'] = contentArray;
      data[parentIndex] = dataJSON;
      props.setData([...data]);
    }
  };

  const deleteTab = (parentIndex) => {
    const data = props.data;
    data.splice(parentIndex, 1);
    props.setData([...data]);
  };

  const addNewTab = () => {
    const data = props.data;
    data.push({
      title: `DEFAULT ${data.length}`,
      content: ['default'],
    });
    props.setData([...data]);
  };

  return (
    <TabContainer>
      {props.data.length > 0 &&
        props.data.map(({ title, content }, index) => {
          return <TabItemWrapper 
          title={title}
          content={content}
          addItem={addItem}
          index={index}
          deleteItem={deleteItem}
          editItem={editItem}
          deleteTab={deleteTab}
          key={`${title}${index}`}
          />
        })}
      <AddNewTab>
        <div className="add-new-tab" onClick={() => addNewTab()}>
          <i className="fa fa-plus"></i>
        </div>
      </AddNewTab>
    </TabContainer>
  );
};

export default Tab;
