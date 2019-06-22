import React from 'react';
import cs from './styles';
import { Mutation } from 'react-apollo';
import ProcessItemForm from '../ProcessItemForm';
import { UpdateItemMutation } from './operations.graphql';

const UpdateItemForm = ({
  id,
  title: initialTitle,
  description: initialDescription,
  imageUrl: initialImageUrl,
  onClose,
}) => (
  <div className={cs.overlay}>
    <div className={cs.content}>
      <Mutation mutation={UpdateItemMutation}>
        {(updateItem, { loading }) => (
          <ProcessItemForm
            initialTitle={initialTitle}
            initialDescription={initialDescription}
            initialImageUrl={initialImageUrl}
            buttonText="Update Item"
            loading={loading}
            onProcessItem={({ title, description, imageUrl }) => {
              updateItem({
                variables: {
                  id,
                  title,
                  description,
                  imageUrl,
                },
              });
              onClose();
            }}
          />
        )}
      </Mutation>
      <button className={cs.close} onClick={onClose}>Close</button>
    </div>
  </div>
);

export default UpdateItemForm;
