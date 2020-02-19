import React from 'react';

class ChangingText extends React.Component {
  state = {
    wordIndex: null,
    charIndex: 0,
    status: 'ending',
    currentWord: null,
    words: [],
  };

  componentDidUpdate() {
    const { currentWord, words, wordIndex } = this.state;
    if (currentWord === words[wordIndex]) {
      setTimeout(this.constructWord, 500);
    } else {
      setTimeout(this.constructWord, 100);
    }
  }

  componentDidMount() {
    const { startingWord, words } = this.props;
    const foundIndex = words.indexOf(startingWord);
    this.setState({
      words: words,
      wordIndex: foundIndex,
      currentWord: startingWord,
    });
  }

  constructWord = () => {
    const { wordIndex, charIndex, status, currentWord, words } = this.state;
    if (status === 'ending') {
      //check to see if currentWord has become an empty string
      if (currentWord === '') {
        this.setState({
          status: 'starting',
          wordIndex: wordIndex === words.length - 1 ? 0 : wordIndex + 1,
          currentWord: '',
        });
      } else {
        //cut off last character
        this.setState({
          currentWord: currentWord.slice(0, currentWord.length - 1),
        });
      }
    } else {
      //check if word is not complete, build word
      if (currentWord !== words[wordIndex]) {
        const updatedWord = words[wordIndex].slice(0, charIndex);
        this.setState({
          charIndex: charIndex + 1,
          currentWord: updatedWord,
        });
      } else {
        this.setState({
          status: 'ending',
          charIndex: 0,
        });
      }
    }
  };

  render() {
    const { preText } = this.props;
    const { currentWord } = this.state;
    return (
      <div className="changing-words">
        {' '}
        {preText} {currentWord}
        <span className="text-indicator">|</span>
      </div>
    );
  }
}

export default ChangingText;
