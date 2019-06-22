import React, { useState } from 'react';
import { Query } from 'react-apollo';
import cs from './styles';
import { LibraryQuery } from './operations.graphql';
import UpdateItemForm from '../UpdateItemForm';

const Library = () => {
  const [item, setItem] = useState(null);

  return (
    <Query query={LibraryQuery}>
      {({ data, loading }) => (
        <div className={cs.library}>
          {loading || !data.items
            ? 'loading...'
            : data.items.map(({ title, id, user, imageUrl, description }) => (
                <button
                  key={id}
                  className={cs.plate}
                  onClick={() => setItem({ id, title, imageUrl, description })}
                >
                  <div className={cs.title}>{title}</div>
                  {imageUrl && <img src={imageUrl} className={cs.image} />}
                  {user ? (
                    <div className={cs.user}>added by {user.email}</div>
                  ) : null}
                </button>
              ))
          }
          {item !== null && (
            <UpdateItemForm {...item} onClose={() => setItem(null)} />
          )}
        </div>
      )}
    </Query>
  );
}

export default Library;
