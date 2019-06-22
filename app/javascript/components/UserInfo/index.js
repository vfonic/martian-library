import React, { useRef } from 'react';
import cs from './styles';
import { Mutation, Query } from 'react-apollo';
import { Me, SignMeIn } from './operations.graphql';

const UserInfo = () => {
  const emailInputRef = useRef(null);

  return (
    <div className={cs.panel}>
      <Query query={Me}>
        {({ data, loading }) => {
          if (loading) return 'Loading...';
          if (!data.me) {
            return (
              <Mutation
                mutation={SignMeIn}
                update={(cache, { data: { signIn } }) => {
                  cache.writeQuery({
                    query: Me,
                    data: { me: signIn.user },
                  });
                }}
              >
                {(signIn, { loading: authenticating }) =>
                  authenticating ? '...' : (
                    <form onSubmit={e => {
                      e.preventDefault();
                      signIn({ variables: { email: emailInputRef.current.value } })
                        .then(({ data: { signIn: { token } } }) => {
                          if (token) localStorage.setItem('mlToken', token);
                        });
                    }}>
                      <input
                        ref={emailInputRef}
                        type="email"
                        className={cs.input}
                        placeholder="your email"
                      />
                      <input type="submit" className={cs.button} value="Sign in" />
                    </form>
                  )
                }
              </Mutation>
            );
          }

          const { fullName } = data.me;
          return <div className={cs.info}>👾 {fullName}</div>;
        }}
      </Query>
    </div>
  );
}

export default UserInfo;
