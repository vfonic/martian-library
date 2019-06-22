import React, { useState } from 'react';
import cs from './styles';

const ProcessItemForm = ({
  initialTitle = '',
  initialDescription = '',
  initialImageUrl = '',
  onProcessItem,
  buttonText,
  loading
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);

  return (
    <div className={cs.form}>
      <input
        type="text"
        placeholder="title"
        value={title}
        className={cs.input}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        className={cs.input}
        onChange={e => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="image url"
        value={imageUrl}
        className={cs.input}
        onChange={e => setImageUrl(e.target.value)}
      />
      {loading ? (
        'Loading...'
      ) : (
        <button
          className={cs.button}
          onClick={() => onProcessItem({ title, description, imageUrl })}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default ProcessItemForm;
