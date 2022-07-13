import React from 'react';

function Notification({ alertMessage }) {
  const errorStyle = {
    color: 'red',
    border: '5px solid red',
    backgroundColor: 'lightGrey',
    padding: '5px',
    margin: '5px',
  };

  const infoStyle = {
    color: 'green',
    border: '5px solid green',
    backgroundColor: 'lightGrey',
    padding: '5px',
    margin: '5px',
  };

  if (alertMessage.message === '') {
    return null;
  }

  let style = infoStyle;

  if (alertMessage.isError === true) {
    style = errorStyle;
  }

  return (
    <div style={style}>
      {alertMessage.message}
    </div>
  );
}

export default Notification;
