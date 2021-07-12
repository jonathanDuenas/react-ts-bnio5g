import React, { useCallback, useReducer } from 'react';
import { render } from 'react-dom';

import CoverImageView from './CoverImageView';
import RefreshButton from './RefreshButton';
import { coverImageNegativeMargin } from './CoverImageView';
import './style.css';

interface StateType {
  loading: boolean;
  error: boolean;
}

enum LoadingType {
  LOADING_ERROR,
  LOADING_INIT,
  LOADING_SUCCESS
}

interface ActionType {
  type: LoadingType;
}

const loadingReducer = (_: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case LoadingType.LOADING_INIT:
      return {
        loading: true,
        error: false
      };
    case LoadingType.LOADING_SUCCESS:
      return {
        loading: false,
        error: false
      };
    case LoadingType.LOADING_ERROR:
      return {
        loading: false,
        error: true
      };
    default:
      throw new Error();
  }
};

const initialState: StateType = {
  loading: false,
  error: true
};

const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(loadingReducer, initialState);
  const { error, loading } = state;

  const handleRefresh = useCallback((): void => {
    dispatch({ type: LoadingType.LOADING_INIT });
    setTimeout(() => dispatch({ type: LoadingType.LOADING_SUCCESS }), 1500);
  }, []);

  const showCard = !(error || loading);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fafafa'
      }}
    >
      <CoverImageView
        imgSrc={
          'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
        }
      />
      {error && (
        <div style={{ marginTop: coverImageNegativeMargin }}>
          <p
            style={{
              paddingLeft: 16,
              color: '#d8000c',
              float: 'left'
            }}
          >
            {'Unexpected error'}
          </p>
          <RefreshButton size="small" onClick={handleRefresh} />
        </div>
      )}
      {loading && (
        <div style={{ marginTop: coverImageNegativeMargin }}>
          <p
            style={{
              paddingLeft: 16
            }}
          >
            {'Loading...'}
          </p>
        </div>
      )}
      {showCard && (
        <div
          style={{
            marginLeft: 32,
            marginRight: 32,
            backgroundColor: '#fafafa',
            borderRadius: 12,
            border: '1px solid #c8c8c8',
            padding: 16,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h2>{'Card Title'}</h2>
          <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
        </div>
      )}
    </div>
  );
};

render(<App />, document.getElementById('root'));
