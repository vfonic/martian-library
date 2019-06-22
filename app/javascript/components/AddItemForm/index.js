import React from 'react';
import cs from './styles';
import { Mutation } from 'react-apollo';
import { AddItemMutation } from './operations.graphql';
import ProcessItemForm from '../ProcessItemForm';
import { LibraryQuery } from '../Library/operations.graphql';

const AddItemForm = () => (
  <Mutation mutation={AddItemMutation}>
    {(addItem, { loading }) =>
      <ProcessItemForm
        buttonText="Add Item"
        loading={loading}
        onProcessItem={({ title, description, imageUrl }) => addItem({
          variables: { title, description, imageUrl },
          update: (cache, { data: { addItem: { item } } }) => {
            if (item) {
              const { items } = cache.readQuery({ query: LibraryQuery });
              cache.writeQuery({
                query: LibraryQuery,
                data: { items: [ item, ...items ] },
              });
            }
          }
        })}
      />
    }
  </Mutation>
);

export default AddItemForm;
