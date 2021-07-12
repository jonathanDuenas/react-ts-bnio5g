import React from 'react';

interface RefreshButtonProps {
  size?: string;
  onClick: () => void;
}

function RefreshButton({ size, onClick }: RefreshButtonProps): JSX.Element {
  return (
    <button
      style={{
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        marginTop: 16,
        marginLeft: 5
      }}
      onClick={onClick}
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAC+0lEQVRIie2WT2xUVRSHv9+bV92qoZraMmORGBbGhYlx5dKY98jYQIEFJAbjwkjTdoohroxJXRmwMx1So3FBIKwYKtLCTGTtxoSVCRsgsTMdi1gCruf9OSxmQmamw7RTxq74rW7eOfd+59zcc96B59ohaauO6fm1ZBgHBx3xoaF9wGsN0xpw11AxipyrN74cXu0LuA4MZyWOAgObuAfIzoehO7tZAF3BXrZ8SNLPwEtAABQwrgn7IwhfvA+gRDCUkL1n4mPBeCO4/yy2T0onU8s9gz/Krgwl5FQBB/glIXdmefr1SrdA02dXRqNIp0HjgCFOFKeTP/aWsZn8+dVZw+6UMqkL3YDt8rLljKQ5IDbjUGkm+evWwc8oP1s5ifgeeGjOwL7S1NB6s935v8DFmeScwRLwiuLgu3Z7C3h/rnx4f658uF9wV+4k9Ud5zMvfG+wI9vL3Bg0tGFpod9qu6o/RloAXiGrHOoIVhwvAIDDYWPdHpkUASR9sAPvz5SNgTVdsfbtyx9FNAME7zd+VPrO2K3KDW6BX2/Y8cAnfXsrsub8doJ9bvdSaTJOMS07kRj90gALsCs39aTtQgESYOAF0CvpBGNYmW+rYz1XuAm860lvXpnff2S70yXnzlTGMluYh7Mj1TKrQUk4GfwJEZu8+KxSgOJ28Cio0YQvXM6kCtNWxjN/rUWm8H2AAc9wJYB1Yb6zZAA7D2kUgABvz8tWRfoBLU0PrwiaETTS3zQ292s9VzgHHDa6UMsmD/YB30oZeHQa1r4BHggNetpzZMfCNU3v/daTPgEjSnJ8rT/V6qJ+tHPdzlW8xe+rf76kGL1v5QmKh7mOLiYSdWp58469uwPTZldEodLKIMSBmIBouToz+0xMYwJsrp+XoPPAyEBgsSlom1M0wdv+G+ujjiPclS1MffVzgoZl9XppJXe454yfwfHWEyL6W7FM2H/ZqEhdjOd+Upkaq3Ry3PIF4+eqIonhMMt+kvRjDDdMa0m3Bb7F0ZTPgc+24HgM8Jh7dNCwHcwAAAABJRU5ErkJggg=="
        width={size === 'small' ? '22px' : undefined}
      />
    </button>
  );
}

export default RefreshButton;
