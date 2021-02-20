import React from 'react'

interface IProgressBar {
  score: number;
}
function ProgressBar(props: IProgressBar) {
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${props.score/5*100}%`,
    backgroundColor: '#48919f',
    borderRadius: 'inherit'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    lineHeight: '20px'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${Math.round(props.score*10)/10}/5`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;